import { ref } from 'vue';

export default {
  setup() {
    const op = [/* some operations or items */];
    // Create a reactive reference to the operation list
    const joinRef = ref(op); 

    // Function to add visual items to the collection
    function collectVisualItems(newItem) {
      // Update the reactive reference
      joinRef.value.push(newItem);
    }

    return {
      joinRef,
      collectVisualItems
    };
  }
};
