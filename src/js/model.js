import { v1 as uuidv1 } from "uuid";

export const state = {
  users: {
    user: "",
    date: "",
    activity: "",
  },
  phases: [],
 notes: [],
  note: {
    note: "",
    noteId: "",
    done: 0,
  },
};

export const setUserModel = function (newUser) {
  const { user, date, activity } = newUser;

  state.users = {
    user,
    date,
    activity,
  };
};

export const setActivityPhase = function (newPhase) {
  const { date, activity, order } = newPhase;
  const phase = {
    phaseId: uuidv1(),
    date,
    percentageDone: 0,
    order,
    activity,
  };

  state.phases.push(phase);
};

export const createNotes = function (note, done, id) {
  const newNote = { note, done };

  state.users.phases.find((el) => el.phaseId === id).notes.push(newNote);
};

// const state2 = {
//   userId: "62731945",
//   user: "Kevin Wasonga",
//   date: "2024-07-22",
//   activity: "Home remodel",
//   phases: [
//     {
//       phaseId: "62731945",
//       dateDealine: "2024-07-18",
//       percentageDone: 100,
//       order: 1,
//       notes: [
//         {
//           note: "Milk cow",
//           done: 1,
//         },
//         {
//           note: "Watch tv",
//           done: 0,
//         },
//         {
//           note: "Build a chair",
//           done: 1,
//         },
//       ],
//     },
//     {
//       phaseId: "62731946",
//       dateDealine: "2024-07-18",
//       percentageDone: 100,
//       order: 1,
//       notes: [
//         {
//           note: "Milk cow",
//           done: 1,
//         },
//         {
//           note: "Watch tv",
//           done: 0,
//         },
//         {
//           note: "Build a chair",
//           done: 1,
//         },
//       ],
//     },
//   ],
// };

// createNotes("love island", 0, "62731946");
// createNotes("Read a book", 0, "62731946");

// console.log(state2);

// function stateSetter() {
//   user = {
//     userId: "62731945",
//     user: "Kevin Wasonga",
//     date: "2024-07-22",
//     activity: "Home remodel",
//     phases: [
//       {
//         userId: "62731945",
//         dateDealine: "2024-07-18",
//         percentageDone: 100,
//         order: 1,
//         notes: [
//           {
//             note: "Milk cow",
//             done: 1,
//           },
//           {
//             note: "Watch tv",
//             done: 0,
//           },
//           {
//             note: "Build a chair",
//             done: 1,
//           },
//         ],
//       },
//     ],
//   };
// }

// stateSetter();
