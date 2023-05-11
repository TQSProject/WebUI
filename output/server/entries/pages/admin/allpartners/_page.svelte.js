import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { S as Sidebar } from "../../../../chunks/Sidebar.js";
import { M as ManagementContainer } from "../../../../chunks/ManagementContainer.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { T as Table_1 } from "../../../../chunks/Table.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const partners = [
    {
      id: 1,
      date: "10-5-2023 12:56",
      source: "Worten Viseu",
      destination: "Rua dos Arcos, 2400-897, Aveiro"
    },
    {
      id: 2,
      date: "10-5-2023 12:56",
      source: "Worten Viseu",
      destination: "Rua dos Arcos, 2400-897, Aveiro"
    },
    {
      id: 3,
      date: "10-5-2023 12:56",
      source: "Worten Aveiro",
      destination: "Rua dos Arcos, 2400-897, Aveiro"
    },
    {
      id: 4,
      date: "10-5-2023 12:56",
      source: "Worten Viseu",
      destination: "Rua dos Arcos, 2400-897, Aveiro"
    }
  ];
  return `${validate_component(ManagementContainer, "ManagementContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Table_1, "Table").$$render(
        $$result,
        {
          title: "All Partners",
          items: partners,
          accept_refuse: false
        },
        {},
        {}
      )}`;
    }
  })}
${validate_component(Navbar, "Navbar").$$render($$result, { loggedIn: true }, {}, {})}
${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
