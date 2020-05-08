const { Engine, Render, Bodies, Runner, World, MouseConstraint, Mouse } = Matter;
const engine = Engine.create();
const { world } = engine;
const height = 600;
const width = 800;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: false,
		width, //In px
		height, //In px
		showAngleIndicator: true
	}
});
Render.run(render);
Runner.run(Runner.create(), engine);
World.add(world, MouseConstraint.create(engine, { mouse: Mouse.create(render.canvas) }));
//The walls
const walls = [
	Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
	Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
	Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
	Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
];
World.add(world, walls);
for (let i = 0; i < 50; i++) {
	if (Math.random() <= 0.5) {
		World.add(
			world,
			Bodies.rectangle(Math.floor(width * Math.random()), Math.floor(height * Math.random()), 50, 50)
		);
	} else {
		World.add(
			world,
			Bodies.circle(Math.floor(width * Math.random()), Math.floor(height * Math.random()), 35, {
				render: {
					fillStyle: 'hsl(180,60%,50%)'
				}
			})
		);
	}
}
