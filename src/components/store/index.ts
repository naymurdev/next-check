import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
type CounterStore = {
  value: string;
  canvasValueChange: (layout: string | undefined) => void;
};
const layoutStore = (set: (arg0: (state: any) => { value: any }) => void) => ({
  value: "both",
  canvasValueChange: (layout: string) => {
    set((state) => ({
      value: layout,
    }));
  },
});
// export const useBearStore = create<CounterStore>((set) => ({
//   value: "both",
//   canvasValueChange: (layout) => {
//     set((state) => ({
//       value: layout,
//     }));
//   },
// }));
const useLayoutStore = create(
  devtools(
    persist(layoutStore, {
      name: "layout",
    })
  )
);
export default useLayoutStore;
