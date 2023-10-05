import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { query, collection, where } from "firebase/firestore";
import { useFirestore, useDocument } from "vuefire";

export const useSalesStore = defineStore("sales", () => {
  const date = ref("");
  const db = useFirestore();

  const salesSource = computed(() => {
    if (date.value) {
      const q = query(collection(db, "sales"), where("date", "==", date.value));
      return q;
    }
  });

  const salesCollection = useDocument(salesSource);

  const isDateSelected = computed(() => date.value.length);

  const noSales = computed(() => !salesCollection.length && date.value);

  const totalSalesOfDay = computed(() => {
    return salesCollection.value
      ? salesCollection.value.reduce((total, sale) => total + sale.total, 0)
      : 0;
  });

  return {
    date,
    salesCollection,
    isDateSelected,
    noSales,
    totalSalesOfDay,
  };
});
