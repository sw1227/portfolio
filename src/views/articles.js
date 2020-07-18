import wire_terrain from './img/wire_terrain.jpg';
import contour_terrain from './img/contour_terrain.jpg';
import convert2 from './img/convert2.jpg';
import fuji_optuna from './img/fuji_optuna.png';
import road_direction from './img/road_direction.jpg';
import hyogo from './img/hyogo.jpg';
import calabiyau2 from './img/calabiyau2.jpg';
import complex from './img/complex.png';
import kuzushiji from './img/kuzushiji.png';
import shuri from './img/shuri.jpg';
import gopher from './img/gopher.JPG';
import imshow from './img/imshow.jpg';
import lattice from './img/lattice.jpeg';
import dempython from './img/dempython.jpg';
import ode from './img/ode.jpeg';
import piano from './img/piano.png';
import cholesky from './img/cholesky.jpg';
import boxmuller from './img/boxmuller.jpg';
import color from './img/color.jpg';
import colorscale from './img/colorscale.png';
import regl from './img/regl.jpg';
import h3hex from './img/h3hex.jpg';
import inversion from './img/inversion.jpg';
import h3vis from './img/h3vis.jpg';


export const tags = {
  observable: {
    label: "observablehq.com",
    color: "#777",
  },
  qiita: {
    label: "qiita.com",
    color: "#55c500",
  },
  blog: {
    label: "hatenablog.com",
    color: "#008fde",
  },
  pages: {
    label: "github.io",
    color: "#487e99",
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
  },
  vis: {
    label: "Visualization"
  }
};


export const articles = [
  {
    image: shuri,
    title: "焼失した首里城のデジタル復元を地図上に3Dで可視化する",
    text: "歴史的建築物は地理的環境と不可分の関係にある。OUR Shurijoプロジェクトで復元された首里城の3DモデルをインタラクティブなWeb地図上に配置して可視化するサイトを作成し、その方法の詳細について解説した。glTFファイルの圧縮やDeck.gl + Mapboxによる可視化が主なテーマ。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2019/11/18/190048",
        text: "",
      },
    ],
    category: [
      categories.three,
      categories.geospatial
    ],
  },
  {
    image: complex,
    title: "複素関数のカラフルな可視化をPython・JavaScriptで実装する",
    text: "入出力ともに複素数である複素関数はイメージし辛いため、Domain Coloring（定義域の着色）という手法によって可視化した。そもそも関数の可視化がいかなる発想に基づいているかを見直すところから始め、複数言語で実装する方法まで解説した。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2018/12/04/090000",
        text: "",
      },
    ],
    category: [
      categories.math
    ],
  },
  {
    image: calabiyau2,
    title: "Calabi-Yau多様体をブラウザ上に可視化する",
    text: "Calabi-Yau多様体を3次元空間に射影し、媒介変数表示に基づいてJavaScript + WebGLで可視化する方法について解説した。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2018/12/03/235105",
        text: "数式・可視化方法の解説",
      },
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/calabi-yau-manifold-3d",
        text: "インタラクティブな可視化(WebGL)",
      }
    ],
    category: [
      categories.three,
      categories.math
    ],
  },
  {
    image: hyogo,
    title: "兵庫県土の1m精度3次元データをWeb地図上に3D可視化",
    text: "地球表面データ（DSM: Digital Surface Model）に対する前処理を行い、Web地図上に点群として可視化した。WebGL + Deck.glを用いることにより、100万点オーダーでもリアルタイムかつインタラクティブに表示することが可能。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2020/03/12/075147",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.three
    ],
  },
  {
    image: road_direction,
    title: "道路方向を可視化して地域の地理的・社会的特性を理解する",
    text: "道路方向には都市の特徴に関する情報が含まれている点に着目し、Web地図上に可視化を実装した。可視化手法は既存のものを参考にしているが、日本のベクトルタイルを利用して独自に実装した。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2018/12/27/150150",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.vis
    ],
  },
  {
    image: fuji_optuna,
    title: "PFN製の最適化ツール「Optuna」で富士山を登頂する",
    text: "登頂を「標高の二次元配列に関して、標高が最大値をとるインデックスを探索する問題」として捉え、Optunaによるベイズ最適化で山頂を探索し、その過程を可視化した。大域的な情報を使わずとも比較的短時間で山頂付近に到達できることを確認できた。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2018/12/06/071825",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.algorithms
    ],
  },
  {
    image: contour_terrain,
    title: "Real time contouring & 3D visualization",
    text: "標高タイルからJavaScriptで動的に等高線を生成し、WebGLで立体的に可視化を行った。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/contoured-mountainious-terrai-3d",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.three,
      categories.algorithms,
    ],
  },
  {
    image: gopher,
    title: "iPhoneのFace IDで3Dスキャンし、データの後処理を行う方法",
    text: "True Depthカメラで取得（スキャン自体は既存アプリで可能）した点群データをポリゴン状の3Dオブジェクトに変換する。MeshLabで点群の編集・法線ベクトルの計算・メッシュへの変換を行う方法や、usdz形式に変換してARで表示する方法について解説した。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2020/03/26/083027",
        text: "",
      },
    ],
    category: [
      categories.three
    ],
  },
  {
    image: convert2,
    title: "緯度経度と平面直角座標の相互変換式: 依存関係の可視化とPythonによる実装",
    text: "国土地理院が公開する変換式にはrad/degの混同があったため、正確な数式を解説し、変数間の依存関係をグラフで明確に可視化した。依存関係を踏まえ、Pythonによる実装も行った。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2018/11/30/200702",
        text: "数式・依存関係の可視化",
      },
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/e7a590994ad7dcd0e8ab",
        text: "Python(+ NumPy)による実装",
      },
    ],
    category: [
      categories.geospatial,
      categories.math,
    ],
  },
  {
    image: kuzushiji,
    title: "MNIST互換の日本語くずし字データセットでCNNやt-SNEを試す",
    text: "当時公開されたばかりだったくずし字データセットについて、クラスごとの画像の可視化・t-SNEによる次元削減・CNN（Keras）による識別といった簡単な実験を行った。",
    links: [
      {
        tag: tags.blog,
        url: "https://sw1227.hatenablog.com/entry/2018/12/10/002329",
        text: "",
      },
    ],
    category: [
      categories.algorithms,
      categories.math
    ],
  },
  {
    image: inversion,
    title: "Circle Inversion: 円による反転の可視化",
    text: "平面幾何学において反転と呼ばれる変換の性質を直感的に理解するため、格子模様や市松模様を反転した図を描画した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/circle-inversion",
        text: "",
      },
    ],
    category: [
      categories.vis,
      categories.math
    ],
  },
  {
    image: wire_terrain,
    title: "Terrain Wireframe",
    text: "鍋割山付近の標高タイルをWireframeで表示するだけの簡単な例。光っている感じを出すためにAdditive Blendingを適用した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/mountain-terrain-3d",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.three
    ],
  },
  {
    image: h3vis,
    title: "H3 index visualizer",
    text: "地理空間インデックス手法H3におけるインデックスを地図上で確認する方法が無かったので、領域ごとのH3 indexを動的に重ねたWeb地図を作成した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/h3-index-visualizer",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.vis
    ],
  },
  {
    image: h3hex,
    title: "H3 GeoJson",
    text: "階層的な六角形構造によって構成される地理空間インデックス手法H3に基づいて、GeoJSONからH3への変換・地図上の可視化を実行した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/h3-geojson",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.algorithms
    ],
  },
  {
    image: regl,
    title: "reglとReactでWebGLのシェーダを簡単に扱う",
    text: "WebGLのWrapperに相当するreglをReactと併せて使い、シェーダを使った自由度の高い描画を簡潔に記述する基本的な方法を紹介した。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/2745d36f20ba47d7e53a",
        text: "",
      },
    ],
    category: [
      categories.vis
    ],
  },
  {
    image: colorscale,
    title: "WebGL(GLSL)でカラースケール関数を実装する",
    text: "RGBの連続的な補間に基づくカラースケール関数を、d3.jsの実装を参考にしてWebGLのシェーダ(GLSL)で実装した。その際、補間前のカラースキームに関してはd3.jsで定義済のものを再利用できるよう工夫した。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/84e1410bd4fdf049857c",
        text: "",
      },
    ],
    category: [
      categories.algorithms,
      categories.vis
    ],
  },
  {
    image: color,
    title: "HSVからRGBへの変換をGLSLで実装する",
    text: "WebGLのシェーダ（GLSL）でHSV色空間からRGB色空間への変換を行う数式を実装した。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/4be9b9f928724a389a85",
        text: "",
      },
    ],
    category: [
      categories.math,
      categories.vis
    ],
  },
  {
    image: boxmuller,
    title: "JavaScriptでBox-Muller法による正規分布からのサンプリング",
    text: "ボックス＝ミュラー法をJavaScriptで実装することにより、一様分布に従う乱数(Math.random())を利用して正規分布に従う確率変数からのサンプリングを行えるようにした。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/8f5da8c22d907352e4c9",
        text: "説明",
      },
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/box-muller-transform",
        text: "インタラクティブ版"
      }
    ],
    category: [
      categories.math,
      categories.algorithms
    ],
  },
  {
    image: cholesky,
    title: "コレスキー分解をJavaScriptで実装する",
    text: "正定値対称行列を下三角行列とその転置によって分解するコレスキー分解がJavaScriptのメジャーなライブラリに実装されていなかったため、自前で実装した。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/0403d8d07e90c62f596b",
        text: "説明",
      },
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/cholesky-decomposition",
        text: "実装: インタラクティブ版"
      }
    ],
    category: [
      categories.algorithms,
      categories.math
    ],
  },
  {
    image: piano,
    title: "プログラムでピアノの鍵盤を描画する方法",
    text: "鍵盤情報の配列を作成してdata-drivenに鍵盤を描画するための考え方と、d3.jsによる実装を紹介した。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/998f8387c4f4c84e707b",
        text: "説明",
      },
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/simple-piano-keyboard",
        text: "実装: インタラクティブ版"
      }
    ],
    category: [
      categories.vis
    ],
  },
  {
    image: ode,
    title: "SciPyで常微分方程式の数値解を得る",
    text: "2重井戸ポテンシャル下の運動方程式を題材とし、常微分方程式を一階の形に式変形した上で数値解を計算する方法について紹介した。簡単なベクトル場の可視化も行った。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/1ece810f93d1bd352b5e",
        text: "",
      },
    ],
    category: [
      categories.math
    ],
  },
  {
    image: lattice,
    title: "格子を描画するための数式を実装する",
    text: "「座標から色への関数」という観点のもとで格子状の模様を描画するための数式を実装した。簡単な市松模様のほか、対数を利用したグラデーション模様（パラメータで調整可能）も考案した。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/edb9340d7e1274baf22a",
        text: "",
      },
    ],
    category: [
      categories.algorithms,
      categories.math
    ],
  },
  {
    image: dempython,
    title: "国土地理院の標高タイルを取得・パースする",
    text: "複数のタイル座標にわたって標高タイルを取得・結合する実装や、緯度経度からの計算等によってタイル座標を確認する方法について、簡単に紹介した。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/877d966da9a5af53b05d",
        text: "Python(任意の矩形領域を取得可能)",
      },
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/a17d424ce8d0cd2302e6",
        text: "JavaScript + タイル座標確認方法の解説"
      },
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/fetch-elevation-tile",
        text: "JavaScript: インタラクティブ版"
      }
    ],
    category: [
      categories.geospatial
    ],
  },
  {
    image: imshow,
    title: "Pythonのimshow()と同様の可視化をJavaScriptで行う",
    text: "二次元配列をカラースケールの適用によって画像として表示する方法として、Pythonではmatplotlib.pyplot.imshow()が知られているが、JavaScriptで同様の可視化を実装した。",
    links: [
      {
        tag: tags.qiita,
        url: "https://qiita.com/sw1227/items/f08cd25364fbaea07792",
        text: "説明・React版",
      },
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/reusable-2d-array-image-function",
        text: "インタラクティブ版"
      }
    ],
    category: [
      categories.vis
    ],
  },
];

