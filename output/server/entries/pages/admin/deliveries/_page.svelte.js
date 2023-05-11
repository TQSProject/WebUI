import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { M as ManagementContainer } from "../../../../chunks/ManagementContainer.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { T as Table_1 } from "../../../../chunks/Table.js";
import { S as Sidebar } from "../../../../chunks/Sidebar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let deliveries = [
    {
      id: 1,
      date: "10-5-2023 12:56",
      source: "Worten Viseu",
      destination: "Rua dos Arcos, 2400-897, Aveiro"
    },
    {
      id: 2,
      date: "10-5-2023 12:56",
      source: "Fnac",
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
  return `${validate_component(Navbar, "Navbar").$$render($$result, { loggedIn: true }, {}, {})}
${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}
${validate_component(ManagementContainer, "ManagementContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Table_1, "Table").$$render(
        $$result,
        {
          title: "Deliveries",
          items: deliveries,
          accept_refuse: true
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page as default
};
