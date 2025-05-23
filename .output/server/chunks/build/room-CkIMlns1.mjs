import{V as t}from"./useApi-D7O_U0tr.mjs";const a=t();async function r(){try{return(await a.get("/allroom")).data}catch(t){throw t}}async function o(t){try{return(await a.get(`/room?slug=${t}`)).data}catch(t){throw t}}export{o,r};
//# sourceMappingURL=room-CkIMlns1.mjs.map
