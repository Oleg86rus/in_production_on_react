import { rtkApi } from '@/shared/api/rtkAPI';
import { Notifications } from '../model/types/Notifications';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notifications[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
