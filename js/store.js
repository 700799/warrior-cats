// Single source of truth shared by the pills, the 3D markers, and the panel.
// A tiny observer ("pub-sub") store — no framework. Subscribers receive the
// full state on every change and decide what to do with it.

const subscribers = new Set();

const state = {
  selectedBookId: null,   // currently open book, or null
  selectedLocation: null, // last-picked location key, or null
  filterArc: "all",       // active arc filter for the pill cloud
  chooserBookIds: null     // when a location has >1 book, the list to choose from
};

function emit() {
  for (const fn of subscribers) fn(state);
}

export const store = {
  get: () => state,

  subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  },

  // Open a specific book by id.
  selectBook(id) {
    state.selectedBookId = id;
    state.chooserBookIds = null;
    emit();
  },

  // Result of picking a location marker. One book -> open it directly; several
  // -> expose the list so the panel can render a chooser.
  selectLocation(key, bookIds = []) {
    state.selectedLocation = key;
    if (bookIds.length === 1) {
      state.selectedBookId = bookIds[0];
      state.chooserBookIds = null;
    } else {
      state.selectedBookId = null;
      state.chooserBookIds = bookIds;
    }
    emit();
  },

  setFilter(arcKey) {
    state.filterArc = arcKey;
    emit();
  },

  // Close the panel / clear the current selection.
  clear() {
    state.selectedBookId = null;
    state.selectedLocation = null;
    state.chooserBookIds = null;
    emit();
  }
};
