import { j as e, L as o } from "./index.js";
import { P as r } from "./PageNav-e2daa83c.js";
import "./Logo-8eff5a47.js";
const s = "_homepage_1p3hb_1",
    t = { homepage: s };
function h() {
    return e.jsxs("main", {
        className: t.homepage,
        children: [
            e.jsx(r, {}),
            e.jsxs("section", {
                children: [
                    e.jsxs("h1", {
                        children: [
                            "You travel the world.",
                            e.jsx("br", {}),
                            "WorldWise keeps track of your adventures.",
                        ],
                    }),
                    e.jsx("h2", {
                        children:
                            "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.",
                    }),
                    e.jsx(o, {
                        to: "/app",
                        className: "cta",
                        children: "Start tracking now",
                    }),
                ],
            }),
        ],
    });
}
export { h as default };
