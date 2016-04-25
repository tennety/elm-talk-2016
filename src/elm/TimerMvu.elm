module Timer where

import Html exposing (..)
import Time exposing (..)

type alias Model = Int

model = 0

update: Float -> Model -> Model
update _ model =
  model + 1

view: Model -> Html
view model =
  model
    |> toString
    |> Html.text

main: Signal Html
main =
  Signal.map view (Signal.foldp update model (every second))
