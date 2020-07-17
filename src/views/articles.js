import wire_terrain from './img/wire_terrain.jpg';
import contour_terrain from './img/contour_terrain.jpg';
import convert from './img/convert.jpeg';
import fuji_optuna from './img/fuji_optuna.png';
import road_direction from './img/road_direction.png';
import hyogo from './img/hyogo.jpg';
import calabiyau from './img/calabiyau.png';
import complex from './img/complex.png';


export const tags = {
  observable: {
    label: "observablehq.com",
    color: "#fff",
    background: "#777",
    variant: "default",
  },
  qiita: {
    label: "qiita.com",
    color: "#fff",
    background: "#55c500",
    variant: "default",
  },
  blog: {
    label: "hatenablog.com",
    color: "#fff",
    background: "#008fde",
    variant: "default",
  },
  pages: {
    label: "github.io",
    color: "#555",
    background: "#fff",
    variant: "outlined"
  }
};

export const categories = {
  geospatial: {
    label: "Geospatial"
  },
  algorithms: {
    label: "Algorithms"
  },
  three: {
    label: "3D"
  },
  math: {
    label: "Math/Stats"
  }
};


export const articles = [
  {
    image: complex,
    title: "複素関数のカラフルな可視化をPython・JavaScriptで実装する",
    text: "入出力ともに複素数である複素関数はイメージし辛いため、Domain Coloring（定義域の着色）という手法によって可視化した。そもそも関数の可視化がいかなる発想に基づいているかを見直すところから始め、複数言語で実装する方法まで解説した。",
    link: "https://sw1227.hatenablog.com/entry/2018/12/04/090000",
    tag: tags.blog,
    category: [
      categories.math
    ],
  },
  {
    image: calabiyau,
    title: "Calabi-Yau Manifold 3D",
    text: "Calabi-Yau多様体を3次元空間に射影し、WebGLでインタラクティブに可視化した。",
    link: "https://observablehq.com/@sw1227/calabi-yau-manifold-3d",
    tag: tags.observable,
    category: [
      categories.three,
      categories.math
    ],
  },
  {
    image: hyogo,
    title: "兵庫県土の1m精度3次元データをWeb地図上に3D可視化",
    text: "地球表面データ（DSM: Digital Surface Model）に対する前処理を行い、Web地図上に点群として可視化した。WebGL + Deck.glを用いることにより、100万点オーダーでもリアルタイムかつインタラクティブに表示することが可能。",
    link: "https://sw1227.hatenablog.com/entry/2020/03/12/075147",
    tag: tags.blog,
    category: [
      categories.geospatial,
      categories.three
    ],
  },
  {
    image: road_direction,
    title: "道路方向を可視化して地域の地理的・社会的特性を理解する",
    text: "道路方向には都市の特徴に関する情報が含まれている点に着目し、Web地図上に可視化を実装した。可視化手法は既存のものを参考にしているが、日本のベクトルタイルを利用して独自に実装した。",
    link: "https://sw1227.hatenablog.com/entry/2018/12/27/150150",
    tag: tags.blog,
    category: [
      categories.geospatial
    ],
  },
  {
    image: fuji_optuna,
    title: "PFN製の最適化ツール「Optuna」で富士山を登頂する",
    text: "富士登山を「富士山付近の標高を収めた二次元配列に関して、標高が最大値をとるようなインデックスを探索する問題」として捉えることにより、Optunaで山頂を探索した。",
    link: "https://sw1227.hatenablog.com/entry/2018/12/06/071825",
    tag: tags.blog,
    category: [
      categories.geospatial,
      categories.algorithms
    ],
  },
  {
    image: contour_terrain,
    title: "Real time contouring & 3D visualization",
    text: "標高タイルからJavaScriptで動的に等高線を生成し、WebGLで立体的に可視化を行った。",
    link: "https://observablehq.com/@sw1227/contoured-mountainious-terrai-3d",
    tag: tags.observable,
    category: [
      categories.geospatial,
      categories.three,
      categories.algorithms
    ],
  },
  {
    image: convert,
    title: "緯度経度と平面直角座標の相互変換をPythonで実装する",
    text: "国土地理院に記載の変換式には単位の混同があるため、正しい式に基づいた実装を示した。",
    link: "https://qiita.com/sw1227/items/e7a590994ad7dcd0e8ab",
    tag: tags.qiita,
    category: [
      categories.geospatial,
      categories.math
    ],
  },
  {
    image: wire_terrain,
    title: "Terrain Wireframe",
    text: "地形",
    link: "https://observablehq.com/@sw1227/mountain-terrain-3d",
    tag: tags.observable,
    category: [
      categories.geospatial,
      categories.three
    ],
  },
];

