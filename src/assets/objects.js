import React from "react";

import Love from "../components/Love";
import Rectangular from "../components/Rectangular";
import Circle from "../components/Circle";
import Hexagon from "../components/Hexagon";
import Parallelogram from "../components/Parallelogram";
import Stars from "../components/Stars";
import Polygon from "../components/Polygon";

import Sphere from "../components/Sphere";
import Cone from "../components/Cone";
import UglyPyramid from "../components/UglyPyramid";
import Pyramid from "../components/Pyramid";
import Cylinder from "../components/Cylinder";
import Prism from "../components/Prism";
import Cuboid from "../components/Cuboid";
import Cube from "../components/Cube";
import HexagonalPrism from "../components/HexagonalPrism";

const objects = {
  shapeAndPattern: [
    {
      name: "Love",
      component: <Love />
    },
    {
      name: "Rectangular",
      component: <Rectangular />
    },
    {
      name: "Circle",
      component: <Circle />
    },
    {
      name: "Hexagon",
      component: <Hexagon />
    },
    {
      name: "Parallelogram",
      component: <Parallelogram />
    },
    {
      name: "Stars",
      component: <Stars />
    },
    {
      name: "Polygon",
      component: <Polygon />
    }
  ],
  findThePairs: [
    {
      name: "Sphere",
      component: <Sphere />
    },
    {
      name: "Cone",
      component: <Cone />
    },
    {
      name: "UglyPyramid",
      component: <UglyPyramid />
    },
    {
      name: "Pyramid",
      component: <Pyramid />
    },
    {
      name: "Cylinder",
      component: <Cylinder />
    },
    {
      name: "Prism",
      component: <Prism />
    },
    {
      name: "Cube",
      component: <Cube />
    },
    {
      name: "Cuboid",
      component: <Cuboid />
    },
    {
      name: "HexagonalPrism",
      component: <HexagonalPrism />
    }
  ]
};

export default objects;
