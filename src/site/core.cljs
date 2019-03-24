(ns site.core
  (:require
    [devtools.core :as devtools]
    [site.view :as view]
    [reagent.core :as r]
    [cljss.core :refer-macros [inject-global] :as css]))

(enable-console-print!)

(defn render
  []
  (css/remove-styles!)
  (inject-global {:html   {:height "100%"}
                  :body   {:margin           0
                           :padding          0
                           :height           "100%"
                           :color            "#fff"
                           :background-color "#000"}
                  :*      {:margin  0
                           :padding 0}
                  :button {:font-family "inherit"}
                  :#root  {:height "100%"}})
  (r/render [view/show] (js/document.getElementById "root")))

(defn init
  []
  (render))
