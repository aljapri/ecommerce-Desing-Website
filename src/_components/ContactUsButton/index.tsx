import Link from "next/link";
import React from "react";

function ContuctUsButton({
  classes,
  content,
}: {
  classes?: string;
  content?: string;
}) {
  return (
    <Link
      className={`${
        classes
          ? classes
          : "w-full mt-6 px-5 py-2.5 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      } inline-flex items-center justify-center`} // Ensures it has the same styling as a button
      href={"https://wa.me/0985306816"}
      style={{ textDecoration: "none" }}
    >
      {content ? content : "تواصل معنا"}
    </Link>
  );
}

export default ContuctUsButton;
