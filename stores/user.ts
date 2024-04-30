import { defineStore } from 'pinia';
import { Subjects, Actions } from '~/shared/permissions';

export const useUserStore = defineStore('user', () => {
    const permissions: Ref<Array<{ subject: Subjects; action: Actions }>> = ref([]);

    function setPermissions(perms: Array<{ subject: Subjects; action: Actions }>) {
        permissions.value = perms;
    }

    return { permissions, setPermissions };
});
