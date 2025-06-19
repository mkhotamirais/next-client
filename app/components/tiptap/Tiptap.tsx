"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: "list-disc ml-4" } },
        orderedList: { HTMLAttributes: { class: "list-decimal ml-4" } },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "min-h-32 border rounded-md py-2 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log(html);
    },
  });

  return (
    <div className="mb-4">
      <h2 className="h2 mb-2">Tiptap</h2>
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
