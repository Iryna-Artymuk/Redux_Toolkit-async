// export const getTasks = state => state.tasks;
// export const getStatusFilter = state => state.filters.status;

export const getTasks = state => state.tasks.items;

export const getIsLoading = state => state.tasks.isLoading;

export const getError = state => state.tasks.error;

export const getStatusFilter = state => state.filters.status;
