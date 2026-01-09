import { useEffect, useMemo, useState, useCallback } from 'react';
import { useAppDispatch, useAppState } from '../../state/useAppStore';
import { fetchRiders, fetchRoutes } from '../../data/mockApi';
import type { Rider, Route } from '../../data/types';
import { isWheelchairRider } from '../../data/eligibility';
import { selectRiderOptionGroups } from '../../data/selectors/riderOptions';

type UseOperationsModelResult = {
  riders: Rider[];
  routes: Route[];
  selectedRiderId: string | null;
  isLoading: boolean;
  error: unknown | null;

  // Derived
  ridersById: Map<string, Rider>;
  selectedRider: Rider | null;
  selectedRiderHasWheelchair: boolean;
  riderGroups: ReturnType<typeof selectRiderOptionGroups>;
  ridersByRouteId: Map<string, Rider[]>;

  // Actions
  reload: () => Promise<void>;
  selectRider: (riderId: string | null) => void;

  dispatch: ReturnType<typeof useAppDispatch>;
};

/**
 * Page-model hook for Operations.
 * Owns: data loading, derived lookups, and page-specific actions.
 */
export function useOperationsModel(): UseOperationsModelResult {
  const dispatch = useAppDispatch();
  const { riders, routes, selectedRiderId } = useAppState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  // Derived lookups
  const ridersById = useMemo(() => new Map(riders.map((r) => [r.id, r])), [riders]);

  const selectedRider = useMemo(() => {
    return selectedRiderId ? (ridersById.get(selectedRiderId) ?? null) : null;
  }, [selectedRiderId, ridersById]);

  const selectedRiderHasWheelchair = useMemo(() => {
    return selectedRider ? isWheelchairRider(selectedRider) : false;
  }, [selectedRider]);

  const riderGroups = useMemo(() => selectRiderOptionGroups(riders, routes), [riders, routes]);

  const ridersByRouteId = useMemo(() => {
    const byId = ridersById; // memoized
    const map = new Map<string, Rider[]>();

    for (const route of routes) {
      map.set(route.id, route.riderIds.map((id) => byId.get(id)).filter(Boolean) as Rider[]);
    }

    return map;
  }, [routes, ridersById]);

  const selectRider = useCallback(
    (riderId: string | null) => {
      dispatch({ type: 'RIDER_SELECT', payload: { riderId } });
    },
    [dispatch]
  );

  const reload = useCallback(async () => {
    const cancelled = false;

    setIsLoading(true);
    setError(null);

    try {
      const [ridersData, routesData] = await Promise.all([fetchRiders(), fetchRoutes()]);
      if (cancelled) return;

      dispatch({ type: 'RIDERS_SET', payload: { riders: ridersData } });
      dispatch({ type: 'ROUTES_SET', payload: { routes: routesData } });
    } catch (e) {
      if (!cancelled) setError(e);
    } finally {
      if (!cancelled) setIsLoading(false);
    }

    return;
  }, [dispatch]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        const [ridersData, routesData] = await Promise.all([fetchRiders(), fetchRoutes()]);
        if (cancelled) return;

        dispatch({ type: 'RIDERS_SET', payload: { riders: ridersData } });
        dispatch({ type: 'ROUTES_SET', payload: { routes: routesData } });
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [dispatch]);

  return {
    riders,
    routes,
    selectedRiderId,

    isLoading,
    error,

    ridersById,
    selectedRider,
    selectedRiderHasWheelchair,
    riderGroups,
    ridersByRouteId,

    reload,
    selectRider,

    dispatch,
  };
}
