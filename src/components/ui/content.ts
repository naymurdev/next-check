export const defaultEditorContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "JavaScript Async Function " }],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Installation" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "JavaScript async functions provide a way to work with asynchronous code more conveniently and with less syntactic noise compared to traditional approaches like callbacks or Promises. Async functions are a special kind of function that can be declared with the async keyword before the function declaration",
        },
      ],
    },

    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Features" }],
    },
    {
      type: "orderedList",
      attrs: { tight: true, start: 1 },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Simplicity and Readability" }],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "Error Handling " },
                {
                  type: "text",
                  text: "with try/catch",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Sequential Execution with await:",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
