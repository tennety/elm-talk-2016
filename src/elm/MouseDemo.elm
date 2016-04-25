module MouseDemo where

import Html exposing (..)
import Mouse exposing (..)
import Keyboard exposing (..)

main =
  Signal.map (Html.text << toString) Mouse.position
