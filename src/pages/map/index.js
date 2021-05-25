import React, {useRef, useEffect} from "react";
import Layout from "@theme/Layout";
import Header from "../../components/Header";
import ForceGraph3D from "3d-force-graph";
import { apprenticeData } from "../../utils/apprentices";

function Map() {

  const raidGuildRoot = {name:'Raid Guild', id:'raidGuild',group:'team'};
  const basicRoles = [{name:'techRoles', group:'techRoles', id:'techRoles'},
            { name:'nonTechRoles', group:'nonTechRoles', id:'nonTechRoles'}];
  const links = [
    {target:raidGuildRoot,source:basicRoles[0],distance:50},
    {target:raidGuildRoot,source:basicRoles[1],distance:50},
    ]


  const gData = {
    nodes: basicRoles.concat(raidGuildRoot),
    links: links,
  };

  function cleanArray(array){
    let merged = [].concat.apply([], array);
    let uniques = [...new Set(merged)];
    return uniques;
  }

  let graph = useRef(null);
  useEffect(() => {
    graph.current = createMap(); //useRef()
  });



  async function getRoles(users){
    let techRolesArray = apprenticeData.map(x=>{return x.techRoles});
    const techRolesUnique = cleanArray(techRolesArray);
    const techRolesNodes = techRolesUnique.map(x=> {return {name:x, id: x, group:'techRoles'}});
    let techRolesLinks = techRolesNodes.map(x=> {return {target:basicRoles[0], source:x}});
    let techRolesUserLinks = [];
    techRolesNodes.map(x=>{
      let results = users.filter(y=> y.techRoles.includes(x.name))
      results.map(y=> techRolesUserLinks.push({target:x, source:y}))
      })
    const techRolesObjects={
      nodes:techRolesNodes,
      links:techRolesLinks.concat(techRolesUserLinks)
    }
    let nonTechRolesArray = apprenticeData.map(x=>{return x.nonTechRoles});
    const nonTechRolesUnique = cleanArray(nonTechRolesArray);
    const nonTechRolesNodes = nonTechRolesUnique.map(x=> {return {name:x, id: x, group:'nonTechRoles'}});
    let nonTechRolesLinks = nonTechRolesNodes.map(x=> {return {target:basicRoles[1], source:x}});
    let nonTechRolesUserLinks = [];
    nonTechRolesNodes.map(x=>{
      let results = users.filter(y=> y.nonTechRoles.includes(x.name))
      results.map(y=> nonTechRolesUserLinks.push({target:x, source:y}))
      })
    const nonTechRolesObjects={
      nodes:nonTechRolesNodes,
      links:nonTechRolesLinks.concat(nonTechRolesUserLinks)
    }
    return [techRolesObjects, nonTechRolesObjects];
  }

  async function joinRolesNodes(users){
    const [techRoles, nonTechRoles] = await getRoles(users);
    const rolesNodes = techRoles.nodes.concat(nonTechRoles.nodes)
    const rolesLinks = techRoles.links.concat(nonTechRoles.links);
    return [rolesNodes, rolesLinks];
  }


  async function getUsersNodes(){
    const userNodes = apprenticeData.map(x=> {return {name:x.name, techRoles:x.techRoles, nonTechRoles:x.nonTechRoles, siteUrl:x.siteUrl, twitter:x.twitterHandle, group:'user'}})
    return userNodes;
  }


  async function createMap(){
    //Adding roles into nodes
    const userNodes = await getUsersNodes();
    console.log(userNodes)
    const [rolesNodes, rolesLinks] = await joinRolesNodes(userNodes);
    const gDataNodes = gData.nodes.concat(rolesNodes)
    const gDataLinks = gData.links.concat(rolesLinks)

    const gDataNodes2 = gDataNodes.concat(userNodes)
    // Adding users into nodes

    //create the final DB for nodes
    const gData2 = {
      nodes: gDataNodes2,
      links:cleanArray(gDataLinks)
    }
    const graph = ForceGraph3D()
      (document.getElementById("3d-graph"))
      .nodeLabel('name')
      .nodeAutoColorBy('group')
      .graphData(gData2);

    return graph;

  }


  return (
    <Layout title='Map'>
      <Header
        title='Raid Guild Map'
        tagline='Explore the guild connections, adventures, heroes and more!'
      />
      <div
        style={{
          id:"3d-graph",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10vh auto",
        }}
      >
      <div id='3d-graph'></div>

        {/* <p>
          Edit <code>pages/apprentices/index.js</code> and save to reload.
        </p> */}
      </div>
    </Layout>
  );
}

export default Map;
