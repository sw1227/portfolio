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
import d3contour from './img/d3contour.jpg';
import broken from './img/broken.jpg';
import overlay from './img/overlay.jpg';
import linkage from './img/linkage.jpg';
import multivariate from './img/multivariate.jpg';
import conformal from './img/conformal.jpg';
import normal3 from './img/normal3.jpg';
import bilinear from './img/bilinear.jpg';
import umbilic from './img/umbilic.jpg';
import supertoroid from './img/supertoroid.jpg';
import flood from './img/flood.jpg';
import pngtile from './img/pngtile.jpg';
import mtgrad from './img/mtgrad.jpg';
import pseudo from './img/pseudo.jpg';
import itokawa from './img/itokawa.jpg';
import warping from './img/warping.jpg';
import distorted from './img/distorted.jpg';
import distortedlayer from './img/distortedlayer.jpg';
import sqrt from './img/sqrt.jpg';
import tree from './img/tree.jpg';
import sir from './img/sir.jpg';
import cyclic from './img/cyclic.jpg';


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
    image: sir,
    title: "SIR simulation of infection (WebGL)",
    text: "SIRモデルという感染症流行過程の古典的な数理モデルを、マルチエージェントシミュレーションとして実装した。WebGLのシェーダ(GLSL)を用いた並列計算により、エージェント数が100万以上でもブラウザでリアルタイムに計算・可視化が実行できる。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/sir-simulation-with-webgl",
        text: "",
      },
    ],
    category: [
      categories.math,
      categories.vis
    ],
  },
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
      categories.math,
      categories.vis
    ],
  },
  {
    image: conformal,
    title: "Conformal transformation",
    text: "複素関数の等角写像に関する性質を確認するため、複素平面上の格子模様を変換したときの模様を可視化した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/conformal-transformation",
        text: "",
      },
    ],
    category: [
      categories.math,
      categories.vis
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
    image: cyclic,
    title: "Cyclic color scale",
    text: "位相などの周期的な量に対してカラースケールを適用する方法を複数示し、JavaScriptで実装した。色相のように周期的な色を対応づける方法以外にも、三角関数を適用してから通常のカラースケールを適用する方法などが考えられる。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/cyclic-color-scale",
        text: "",
      },
    ],
    category: [
      categories.vis,
      categories.math
    ],
  },
  {
    image: tree,
    title: "Collapsible directory tree: from tree command",
    text: "ディレクトリの階層構造を表示するtreeコマンドは、-JオプションによりJSON形式で出力することができる。そのJSONを記入することで伸縮可能なツリーが表示されるページをJavaScriptで実装した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/collapsible-directory-tree-from-tree-command",
        text: "",
      },
    ],
    category: [
      categories.vis
    ],
  },
  {
    image: sqrt,
    title: "Babylonian method visualized - computing sqrt",
    text: "平方根を計算する「バビロニア人の方法」というアルゴリズムがCobweb plot（クモの巣図法）によって説明できることに気がついたので、初期値から平方根へ収束する様子をJavaScriptでインタラクティブに可視化した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/babylonian-method-visualized-sqrt",
        text: "",
      },
    ],
    category: [
      categories.math,
      categories.algorithms,
      categories.vis
    ],
  },
  {
    image: distortedlayer,
    title: "Distorted sphere layers",
    text: "パーリンノイズで歪めた球を玉ねぎ状に重ね、WebGLで可視化した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/distorted-sphere-layers",
        text: "",
      },
    ],
    category: [
      categories.three,
    ],
  },
  {
    image: distorted,
    title: "Distorting sphere with cyclic perlin noise",
    text: "パーリンノイズで円を（一周したらつながるように）歪める手法を知ったので、同様の発想に基づき、+1次元した球を変形させる処理を実装した。3次元連続ノイズの値を球面に沿って拾い、半径方向のオフセットに利用する。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/distorting-sphere-with-cyclic-perlin-noise",
        text: "",
      },
    ],
    category: [
      categories.three,
      categories.algorithms,
      categories.math
    ],
  },
  {
    image: warping,
    title: "Lattice Warping",
    text: "フラクタルブラウン運動を応用して画像を歪めるDomain Warpingによって2次元空間がどう歪められるかを確認するため、格子模様を変形させた様子を可視化した。WebGLのシェーダを書いているためリアルタイムに動作する。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/lattice-warping",
        text: "実装: WebGLをそのまま利用",
      },
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/lattice-warping-with-regl",
        text: "実装: regl(WebGLのwrapper)を利用"
      }
    ],
    category: [
      categories.algorithms,
      categories.math
    ],
  },
  {
    image: itokawa,
    title: "Asteroid Itokawa 3D [9MB]",
    text: "小惑星探査機「はやぶさ」のターゲットとなったイトカワの3次元形状をWebGLで可視化した。法線マテリアルとWireframeを重ねている。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/asteroid-itokawa-3d-9mb",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.three
    ],
  },
  {
    image: pseudo,
    title: "Pseudo-contouring",
    text: "標高タイルを手早く可視化する際に、実際には未計算の等高線をあるかのように見せるテクニックを提案した。標高値と標高のmodをうまく利用することで、地形の把握がしやすくなる。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/pseudo-contouring",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.algorithms
    ],
  },
  {
    image: mtgrad,
    title: "Gradient of Mountain",
    text: "標高タイルの勾配ベクトルを計算する処理を実装し、各地点におけるx, y方向の勾配や勾配ベクトルの絶対値・勾配ベクトルの方向を画像として可視化した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/gradient-of-monutain",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.math
    ],
  },
  {
    image: pngtile,
    title: "Decoding PNG elevation tile",
    text: "PNG形式の標高タイルをWebGLのシェーダ(GLSL)でデコードする処理を実装し、標高にカラースケールを適用した画像として可視化するサンプルを作成した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/decoding-png-elevation-tile",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.math
    ],
  },
  {
    image: flood,
    title: "Typhoon Hagibis",
    text: "2019/10/12の台風第19号による浸水状況を国土地理院がタイルとして公開していたため、各種地図に重ねて可視化した。通常のWeb地図ライブラリでは難しかったタイルのblendは、地図表示にd3-tileとd3-zoomを使うことで実現した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/japan-flood",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.vis
    ],
  },
  {
    image: supertoroid,
    title: "Supertoroid",
    text: "Supertoroidと呼ばれる3次元形状の数式を実装し、WebGLで可視化した。形状は2つの定数に依存するため、スライドバーでインタラクティブに形状を制御できるようにした。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/supertoroid",
        text: "",
      },
    ],
    category: [
      categories.three,
      categories.math
    ],
  },
  {
    image: umbilic,
    title: "Umbilic Torus",
    text: "辺と面を1つずつしか持たない3次元形状であるアンビリック・トーラスのパラメトリックな数式を実装し、WebGLで可視化した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/umbilic-torus",
        text: "",
      },
    ],
    category: [
      categories.three,
      categories.math
    ],
  },
  {
    image: bilinear,
    title: "Bilinear interpolation of tile",
    text: "2Dグリッド上の値を滑らかに補間するBilinear interpolationをJavaScriptで実装した。標高タイルに適用することで、サブピクセル補間が行える様子を可視化した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/bilinear-interpolation-of-tile",
        text: "",
      },
    ],
    category: [
      categories.algorithms,
      categories.geospatial
    ],
  },
  {
    image: multivariate,
    title: "Multivariate Normal Distribution",
    text: "多次元正規分布の分布関数・Samplerをスクラッチから実装し、共分散行列をインタラクティブに操作した際の分布形状を2・3次元で可視化した。その際、過去に実装した一次元正規分布からのSampler（Box-Muller法）とCholesky分解を利用した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/multivariate-normal-distribution",
        text: "",
      },
    ],
    category: [
      categories.math,
      categories.three,
      categories.vis
    ],
  },
  {
    image: normal3,
    title: "3D Normal Distribution",
    text: "3変数の正規分布の確率密度関数を、3次元空間上における点群の色としてWebGLで可視化した。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/3d-normal-distribution",
        text: "",
      },
    ],
    category: [
      categories.three,
      categories.math,
      categories.vis
    ],
  },
  {
    image: linkage,
    title: "Animating 4-Bar Linkage",
    text: "4節リンク機構のアニメーションをJavaScriptで実装した。リアクティブプログラミング的な考え方を利用することで、座標間の依存関係をそのまま実装するだけで動作をシミュレートすることが可能になった。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/animating-4-bar-linkage",
        text: "",
      },
    ],
    category: [
      categories.math,
      categories.vis
    ],
  },
  {
    image: broken,
    title: "Broken Calabi-Yau Manifold",
    text: "Calabi-Yau多様体の3次元空間への射影を可視化する際、微小な面をランダムに回転させることでGenerative Art風にした。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/broken-calabi-yau-manifold-3d",
        text: "",
      },
    ],
    category: [
      categories.three,
      categories.math
    ],
  },
  {
    image: d3contour,
    title: "Dem to contour by d3",
    text: "d3.jsを使って標高タイルから等高線を生成した。等高線はリアルタイムで動的に生成されているため、スライドバーで間隔を操作することが可能。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/dem-to-contour-by-d3",
        text: "",
      },
    ],
    category: [
      categories.geospatial,
      categories.algorithms
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
        text: "説明",
      },
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/d3-scale-chromatic-in-webgl",
        text: "実装: インタラクティブ版"
      }
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
    image: overlay,
    title: "Overlay DIY contour on map",
    text: "ピクセル座標と緯度経度の変換式を実装することで、標高タイルから動的に生成した等高線をWeb地図に重ねられるようにした。",
    links: [
      {
        tag: tags.observable,
        url: "https://observablehq.com/@sw1227/overlay-diy-contour-on-map",
        text: "",
      },
    ],
    category: [
       categories.geospatial,
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

