module PortsDemo where
import Time exposing (..)
import Html

port tick: Signal Float
port tick = every second

port message: Signal String

main =
  Signal.map Html.text message
