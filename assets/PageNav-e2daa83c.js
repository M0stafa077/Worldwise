import { j as n, L as c, N as i } from "./index.js";
import { L as t } from "./Logo-8eff5a47.js";
const a = "_nav_8tfzf_1",
    r = "_ctaLink_8tfzf_28",
    s = { nav: a, ctaLink: r };
function e() {
    return n.jsxs("nav", {
        className: s.nav,
        children: [
            n.jsx(c, { to: "/", children: n.jsx(t, {}) }),
            n.jsxs("ul", {
                children: [
                    n.jsx("li", {
                        children: n.jsx(i, {
                            to: "/pricing",
                            children: "Pricing",
                        }),
                    }),
                    n.jsx("li", {
                        children: n.jsx(i, {
                            to: "/product",
                            children: "Product",
                        }),
                    }),
                    n.jsx("li", {
                        children: n.jsx(i, {
                            to: "/login",
                            className: s.ctaLink,
                            children: "Login",
                        }),
                    }),
                ],
            }),
        ],
    });
}
export { e as P };
