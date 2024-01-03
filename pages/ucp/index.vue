<template>
    <div class="row q-py-6">
        <div class="col-md-8 col-12 border-e q-pb-lg q-pb-md-none">
            <div class="q-pr-sm">
                <div class="text-h5 q-mb-xs q-mt-md text-weight-medium">
                    Welcome back, <span class="text-capitalize">{{ data.user.name }}</span> 👋🏻
                </div>
                <div>Enjoy your time with us. Check out our news section!</div>
            </div>
        </div>

        <div class="col-md-4 col-12">
            <div class="flex justify-between items-center">
                <div class="flex column q-pl-md">
                    <div class="text-h6 no-wrap q-mb-xs">Gametime</div>
                    <span class="q-mb-md">This week</span>
                    <div class="text-h5 q-mb-xs">
                        32<span class="text-h6 text-medium-emphasis">h</span> 14<span
                            class="text-h6 text-medium-emphasis"
                            >m</span
                        >
                    </div>
                    <div>
                        <q-chip :ripple="false" color="positive" text-color="green" dense square>+ 18%</q-chip>
                    </div>
                </div>
                <div class="relative-position">
                    <ClientOnly>
                        <apexchart width="180px" type="donut" :options="gametimeOptions" :series="gametimeSeries" />
                    </ClientOnly>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'vertical'
});

const { data } = useAuth();

const gametimeOptions = ref({
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            donut: {
                size: '75%',
                labels: {
                    show: true,
                    total: {
                        show: true,
          
                        fontSize: '14px',
                        formatter: function (w) {
                            const total = w.globals.seriesTotals.reduce((a, b) => {
                                return a + b;
                            }, 0);

                            return Math.floor(total / 60) > 0 ? Math.floor(total / 60) + 'h' : total + 'm'
                        }
                    },
                    value: {
                        show: true,
                    
                        formatter: function (val) {
                            return Math.floor(val / 60) > 0 ? Math.floor(val / 60) + 'h' : val + 'm';
                        }
                    }
                }
            }
        }
    },
    legend: {
        show: false
    },
    stroke: {
        show: false
    },
    tooltip: {
        enabled: false
    }
});
const gametimeSeries = ref([140, 110]);
</script>

<style lang="scss">
.border-e {
    border-inline-end-width: thin;
    border-inline-end-style: solid;
    border-inline-end-color: $border;
}
</style>
