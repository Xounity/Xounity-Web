import React from "react";

// custom Warning/Note box
const Callout = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-gray-800/50 border-l-4 border-xounity-orange p-6 my-8 rounded-r-lg shadow-md">
      {title && (
        <strong className="block text-white font-bold text-lg mb-2 font-mono uppercase tracking-wider">
          {title}
        </strong>
      )}
      <div className="text-gray-300 m-0 leading-relaxed">{children}</div>
    </div>
  );
};

export const customComponents = {
  Callout,
  // we can even override standard HTML tags here if you want!
  // h1: (props: any) => <h1 className="text-xounity-orange text-6xl" {...props} />,
};
