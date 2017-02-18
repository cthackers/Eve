// import {create} from "./programs/tag-browser";
// let prog = create();

import {Program} from "./runtime/dsl2";
let prog = new Program("test");

// prog.block("simple block", ({find, record, lib}) => {
//   find({foo: "bar"});
//   return [
//     record({zomg: "baz"})
//   ]
// });

// prog.test(0, [
//   [1, "foo", "bar"]
// ]);

// prog.commit("coolness", ({find, not, record, choose}) => {
//   let click = find("click", "direct-target");
//   let count = find("count");
//   let current = count.count;
//   3 > current;
//   return [
//     count.remove("count").add("count", current + 1)
//   ]
// })

// prog.commit("foo", ({find}) => {
//   let click = find("click", "direct-target");
//   return [
//     click.remove("tag", "click"),
//     click.remove("tag", "direct-target"),
//   ];
// })


// prog.test(0, [
//   [1, "tag", "count"],
//   [1, "count", 0]
// ]);


// prog.test(1, [
//   [2, "tag", "click"],
//   [2, "tag", "direct-target"]
// ]);


// prog.test(2, [
//   [3, "tag", "click"],
//   [3, "tag", "direct-target"]
// ]);


prog.block("Every edge is the beginning of a path.", ({find, record, lib}) => {
  let from = find();
  return [
    from.add("path", from.edge)
  ];
});

prog.block("Jump from node to node building the path.", ({find, record, lib}) => {
  let from = find();
  let intermediate = find();
  from.edge == intermediate;
  let to = intermediate.path;

  intermediate.path;
  return [
    from.add("path", to)
  ]
});

prog.test(0, [
  [1, "edge", 2],
  [2, "edge", 1]
]);
prog.test(1, [
  [1, "edge", 2, 0, -1],
]);
prog.test(2, [
  [1, "edge", 2],
]);

// prog
//   // .block("Find all the tags.", ({find, record}) => {
//   //   let tag = find().tag;
//   //   return [
//   //     record("tiggedy-tag", {real: tag})
//   //   ];
//   // })
//   .commit("Throw away click events", ({find, record}) => {
//     let click = find("click", "direct-target");
//     return [
//       //click.remove("tag")
//       click.remove("tag"),
//     ];
//   })

//   .commit("When we get a click, store it.", ({find, record}) => {
//     let app = find("app");
//     let click = find("click");

//     return [
//       app.remove("last").add("last", click.fruit)
//     ]
//   })

//   // .block("Draw the l-word guy.", ({find, record}) => {
//   //   let app = find("app");
//   //   let container = find("container");

//   //   return [
//   //     container.remove("children").add("children", record("div", {text: `funkit ${app.last}`}))
//   //   ];
//   // })

// prog.test(0, [
//   [1, "tag", "app"],
//   [2, "tag", "container"],
// ]);

// prog.test(1, [
//   [3, "tag", "click"],
//   [3, "tag", "direct-target"],
//   [3, "fruit", "kumquat"],
// ]);

// // prog.test(2, [
// //   [4, "tag", "click"],
// //   [4, "tag", "direct-target"],
// //   [4, "fruit", "round orange kumquat"],
// // ])

// prog.test(2, [
//   [5, "tag", "click"],
//   [5, "tag", "direct-target"],
//   [5, "fruit", "kumquat"],
// ])

// prog.test(4, [
//   [6, "tag", "click"],
//   [6, "tag", "direct-target"],
//   [6, "fruit", 14],
// ])



//   .commit("When we get a click increment a counter", ({find, record}) => {
//     let counter = find("counter");
//     let click = find("click", "direct-target");
//     let count = counter.count;
//     10 > count;
//     return [
//       counter.remove("count", count).add("count", count + 1)
//     ];
//   })
//   // .block(":(", ({find, record}) => {
//   //   let click = find("click", "direct-target");
//   //   return [
//   //     record("foo", {click})
//   //   ];
//   // })

// console.log(prog);

// console.groupCollapsed("Test 0");
// prog.test(0, [
//   ["c", "tag", "counter"],
//   ["c", "count", 1]
// ]);
// console.groupEnd();

// console.log("#### Test 1");
// prog.test(1, [
//   ["event1", "tag", "click"],
//   ["event1", "tag", "direct-target"],
// ]);

// console.groupCollapsed("Test 2");
// prog.test(2, [
//   ["event2", "tag", "click"],
//   ["event2", "tag", "direct-target"],
// ]);
// console.groupEnd();
