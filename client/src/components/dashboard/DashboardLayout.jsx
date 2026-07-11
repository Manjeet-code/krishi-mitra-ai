import "./DashboardLayout.css";

export default function DashboardLayout({
  sidebar,
  header,
  banner,
  children
}) {

  return (

<div className="km-layout">

  <aside className="km-layout__sidebar">
      {sidebar}
  </aside>


  <div className="km-layout__main">

      <header className="km-layout__header">
          {header}
      </header>


      <section className="km-layout__banner">
          {banner}
      </section>


      <main className="km-layout__content">
          {children}
      </main>


  </div>

</div>

  );

}