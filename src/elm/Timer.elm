module Timer where

import Html exposing (..)
import Time exposing (..)

input: Signal Int
input =
  Signal.foldp (\_ t -> t + 1) 0 (every second)

main: Signal Html
main =
  Signal.map (Html.text << toString) input
