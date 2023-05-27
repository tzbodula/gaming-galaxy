 



const Layout = ({ children }) => {


  return (
    <>

      <main className="relative">
        {children}
      </main>
      <footer className={`sticky footerbkg bg-nightsky max-w-full mx-auto  `}>

      </footer>
    </>
  );
};

export default Layout;
