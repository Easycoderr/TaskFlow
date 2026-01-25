function EmptyPage({ children }) {
  return (
    <div className="p-8 flex items-center justify-center mx-auto">
      {/* message */}
      <p className="dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-800 p-8 rounded-md text-lg font-medium leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export default EmptyPage;
