{
  "category": "motion",
  "blocks": [
    {
      "id": "move_steps",
      "name": "move [10] steps",
      "type": "command",
      "action": "ctx.x += Math.cos(ctx.angle * Math.PI/180) * value"
    },
    {
      "id": "turn_right",
      "name": "turn right [15] degrees",
      "type": "command",
      "action": "ctx.angle += value"
    },
    {
      "id": "turn_left",
      "name": "turn left [15] degrees",
      "type": "command",
      "action": "ctx.angle -= value"
    },
    {
      "id": "go_to_xy",
      "name": "go to x: [0] y: [0]",
      "type": "command",
      "action": "ctx.x = value.x; ctx.y = value.y"
    }
  ]
}
