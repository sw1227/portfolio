import wire_terrain from './img/wire_terrain.jpg';
import contour_terrain from './img/contour_terrain.jpg';
import convert from './img/convert.jpeg';
import convert2 from './img/convert2.jpg';
import fuji_optuna from './img/fuji_optuna.png';
import road_direction from './img/road_direction.png';
import hyogo from './img/hyogo.jpg';
import calabiyau from './img/calabiyau.png';
import calabiyau2 from './img/calabiyau2.jpg';
import complex from './img/complex.png';
import kuzushiji from './img/kuzushiji.png';
import shuri from './img/shuri.jpg';
import gopher from './img/gopher.JPG';


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
    label: "Math / ML / Statistics"
  }
};


export const articles = [
  {
    image: shuri,
    title: "焼失した首里城のデジタル復元を地図上に3Dで可視化する",
    text: "歴史的建築物は地理的環境と不可分の関係にある。OUR Shurijoプロジェクトで復元された首里城の3DモデルをインタラクティブなWeb地図上に配置して可視化するサイトを作成し、その方法の詳細について解説した。glTFファイルの圧縮やDeck.gl + Mapboxによる可視化が主なテーマ。",
    link: "https://sw1227.hatenablog.com/entry/2019/11/18/190048",
    tag: tags.blog,
    category: [
      categories.three,
      categories.geospatial
    ],
  },
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
    image: calabiyau2,
    title: "Calabi-Yau多様体をブラウザ上に可視化する",
    text: "Calabi-Yau多様体を3次元空間に射影し、媒介変数表示に基づいてJavaScript + WebGLで可視化する方法について解説した。",
    link: "https://sw1227.hatenablog.com/entry/2018/12/03/235105",
    tag: tags.blog,
    category: [
      categories.three,
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
    text: "登頂を「標高の二次元配列に関して、標高が最大値をとるインデックスを探索する問題」として捉え、Optunaによるベイズ最適化で山頂を探索し、その過程を可視化した。大域的な情報を使わずとも比較的短時間で山頂付近に到達できることを確認できた。",
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
    image: gopher,
    title: "iPhoneのFace IDで3Dスキャンし、データの後処理を行う方法",
    text: "True Depthカメラで取得（スキャン自体は既存アプリで可能）した点群データをポリゴン状の3Dオブジェクトに変換する。MeshLabで点群の編集・法線ベクトルの計算・メッシュへの変換を行う方法や、usdz形式に変換してARで表示する方法について解説した。",
    link: "https://sw1227.hatenablog.com/entry/2020/03/26/083027",
    tag: tags.blog,
    category: [
      categories.three
    ],
  },
  {
    image: convert,
    title: "緯度経度と平面直角座標の相互変換をPythonで実装する",
    text: "ブログの方で紹介した修正版の変換式と可視化に基づき、Python (+ NumPy)で変換のための関数を実装した。",
    link: "https://qiita.com/sw1227/items/e7a590994ad7dcd0e8ab",
    tag: tags.qiita,
    category: [
      categories.geospatial,
      categories.math
    ],
  },
  {
    image: convert2,
    title: "緯度経度と平面直角座標の相互変換を実装するための数式",
    text: "国土地理院が公開する変換式には角度単位の混同（rad/deg）があったため、正確な数式を解説した。その際、変数間の依存関係をグラフで明確に可視化することで実装を容易にした。",
    link: "https://sw1227.hatenablog.com/entry/2018/11/30/200702",
    tag: tags.blog,
    category: [
      categories.geospatial,
      categories.math
    ],
  },
  {
    image: kuzushiji,
    title: "MNIST互換の日本語くずし字データセットでCNNやt-SNEを試す",
    text: "当時公開されたばかりだったくずし字データセットについて、クラスごとの画像の可視化・t-SNEによる次元削減・CNN（Keras）による識別といった簡単な実験を行った。",
    link: "https://sw1227.hatenablog.com/entry/2018/12/10/002329",
    tag: tags.blog,
    category: [
      categories.algorithms,
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

