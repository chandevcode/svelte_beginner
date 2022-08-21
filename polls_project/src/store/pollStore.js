import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "What is your favorite color?",
    answerA: "Red",
    answerB: "Blue",
    votesA: 2,
    votesB: 6,
  },
]);


 export default PollStore;