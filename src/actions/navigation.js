export const SWITCH_TAB = 'SWITCH_TAB';
export default function switchTab(tab) {
  return {
    type: SWITCH_TAB,
    tab,
  };
}
