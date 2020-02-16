(ns site.view
  (:require
    ["animejs" :as anime]
    [reagent.core :as r]
    [cljss.core :refer-macros [defstyles]]))

(defstyles icon-link
           []
           {:transition "transform .3s ease-in-out"
            :&:hover    {:transform "scale(1.1)"}})

(defn- social-list
  []
  (let [coll [{:icon  "fab fa-linkedin"
               :link  "https://www.linkedin.com/in/leocardoso94/"
               :color "#007bb6"}
              {:icon  "fab fa-medium"
               :link  "https://medium.com/@leocardoso"
               :color "#fafafa"}
              {:icon  "fab fa-github"
               :link  "https://github.com/Leocardoso94"
               :color "#fff"}
              {:icon  "fab fa-instagram"
               :link  "https://www.instagram.com/leocardoso94"
               :color "#752c11"}
              {:icon  "fab fa-codepen"
               :link  "https://codepen.io/leocardoso"
               :color "#1f1c1d"}
              {:icon  "fab fa-twitter"
               :link  "https://twitter.com/Leocardoso94_"
               :color "#1da1f2"}
              {:icon  "fab fa-free-code-camp"
               :link  "https://www.freecodecamp.org/leocardoso94_"
               :color "#006400"}
              {:icon  "fas fa-envelope"
               :link  "mailto:leocardosoti@gmail.com"
               :color "#b5301f"}
              {:icon  "fab fa-stack-overflow"
               :link  "https://pt.stackoverflow.com/users/87986/leonardo-cardoso"
               :color "#f48024"}]]
    (r/create-class {:component-did-mount (fn []
                                            (-> anime
                                                (.timeline #js {:loop false})
                                                (.add (clj->js {:targets  ".icons a"
                                                                :easing   "easeOutExpo"
                                                                :opacity  [0 1]
                                                                :duration 3000
                                                                :delay    (fn [el i]
                                                                            (* 100 (inc i)))}))))
                     :reagent-render      (fn []
                                            [:div.flex.justify-center.w-100.icons.flex-wrap
                                             (for [{:keys [icon link color]} coll]
                                               [:a.pa3
                                                {:href   link
                                                 :key    link
                                                 :class  (icon-link)
                                                 :target "_blank"}
                                                [:i.f1
                                                 {:class icon
                                                  :style {:color color}}]])])})))

(defn ocuppation
  []
  [:h3.fw1.mt1.mb4 
      "Co-Founder "
      [:a {:href "https://oiluna.com"
           :style  {:color "#fff"}} "Luna"]])


(defn avatar
  []
  [:div.avatar
  [:img.flex-auto.br-100.w4.h4.ba.b--white.bw2
    {:src
    "https://avatars0.githubusercontent.com/u/12713314?v=4&u=7964a9e94cac2f5b35869a8cc263273cb9e1be30&s=400"}]])  

(defn username
  []
  (r/create-class
    {:component-did-mount (fn []
                            (-> anime
                                (.timeline #js {:loop false})
                                (.add (clj->js {:targets  ".username .letter"
                                                :easing   "easeOutExpo"
                                                :opacity  [0 1]
                                                :duration 1500
                                                :delay    (fn [el i]
                                                            (* 100 (inc i)))}))))
     :reagent-render      (fn []
                            [:h1.username.fw3.f1.mv2.tc
                             [:span.relative.dib.pt1.pr1.pb1
                              [:span.o-0.absolute.left-0.h-100.bg-white.top-0.line
                               {:style {:width            3
                                        :transform-origin "0 50%"}}]
                              [:span.dib.letters
                               (map-indexed (fn [index letter] [:span.letter {:key index} letter])
                                            "Leonardo Cardoso")]]])}))


(defn show
  []
  [:div.flex.justify-center.h-100.flex-column.items-center
   [:div.flex.justify-center.flex-column.items-center.w-100.ph3
    {:style {:padding-top 100}}
    [avatar]
    [username]
    [ocuppation]
    [social-list]]])