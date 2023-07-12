(() => {
    "use strict";
    let e = 0;
    function t(t) {
        return "+" === t ? e++ : e--, e;
    }
    const n = document.querySelector("#increment"),
        c = document.querySelector(".count"),
        o = document.querySelector("#decrement");
    var r;
    function u() {
        localStorage.count = e;
    }
    function i() {
        c.innerHTML = e;
    }
    localStorage.count && ((r = localStorage.count), (e = r)),
        n.addEventListener("click", function () {
            t("+"), i(), u();
        }),
        o.addEventListener("click", function () {
            t("-"), i(), u();
        }),
        i();
})();
