function buildroom(X, Y, data) {
  entities.push(new surface(X + 1000, Y + 200, X + 1200, Y + 0)) // corners
  entities.push(new surface(X + 1200, Y + -600, X + 1000, Y + -800))
  entities.push(new surface(X + -1200, Y + 0, X + -1000, Y + 200))
  entities.push(new surface(X + -1000, Y + -800, X + -1200, Y + -600))

  switch (data.downL) {
    case "closed":
      entities.push(new surface(X + -1000, Y + 200, X + 0, Y + 200))
      break;
    case "open":
      entities.push(new surface(X + -1000, Y + 200, X + -700, Y + 200))
      entities.push(new surface(X + -500, Y + 200, X + 0, Y + 200))

      entities.push(new surface(X + -550, Y + 250, X + -500, Y + 200))
      entities.push(new surface(X + -700, Y + 200, X + -650, Y + 250))

      entities.push(new surface(X + -550, Y + 500, X + -550, Y + 250))
      entities.push(new surface(X + -650, Y + 250, X + -650, Y + 500))
      break;
    case "vent":
      entities.push(new surface(X + -1000, Y + 200, X + -700, Y + 200))
      entities.push(new surface(X + -500, Y + 200, X + 0, Y + 200))

      entities.push(new surface(X + -550, Y + 250, X + -500, Y + 200))
      entities.push(new surface(X + -700, Y + 200, X + -650, Y + 250))

      entities.push(new surface(X + -550, Y + 500, X + -550, Y + 250))
      entities.push(new surface(X + -650, Y + 250, X + -650, Y + 500))

      entities.push(new vent(X + -650, Y + 250, X + -550, Y + 250))
      break;
    default:
  }

  switch (data.downR) {
    case "closed":
      entities.push(new surface(X + 0, Y + 200, X + 1000, Y + 200))
      break;
    case "open":
      entities.push(new surface(X + 0, Y + 200, X + 500, Y + 200))
      entities.push(new surface(X + 700, Y + 200, X + 1000, Y + 200))

      entities.push(new surface(X + 500, Y + 200, X + 550, Y + 250))
      entities.push(new surface(X + 650, Y + 250, X + 700, Y + 200))

      entities.push(new surface(X + 550, Y + 250, X + 550, Y + 500))
      entities.push(new surface(X + 650, Y + 500, X + 650, Y + 250))
      break;
    case "vent":
      entities.push(new surface(X + 0, Y + 200, X + 500, Y + 200))
      entities.push(new surface(X + 700, Y + 200, X + 1000, Y + 200))

      entities.push(new surface(X + 500, Y + 200, X + 550, Y + 250))
      entities.push(new surface(X + 650, Y + 250, X + 700, Y + 200))

      entities.push(new surface(X + 550, Y + 250, X + 550, Y + 500))
      entities.push(new surface(X + 650, Y + 500, X + 650, Y + 250))

      entities.push(new vent(X + 550, Y + 250, X + 650, Y + 250))
      break;
    default:
  }

  switch (data.upL) {
    case "closed":
      entities.push(new surface(X + 0, Y + -800, X + -1000, Y + -800))
      break;
    case "open":
      entities.push(new surface(X + -700, Y + -800, X + -1000, Y + -800))
      entities.push(new surface(X + 0, Y + -800, X + -500, Y + -800))

      entities.push(new surface(X + -500, Y + -800, X + -550, Y + -850))
      entities.push(new surface(X + -650, Y + -850, X + -700, Y + -800))

      entities.push(new surface(X + -550, Y + -850, X + -550, Y + -1100))
      entities.push(new surface(X + -650, Y + -1100, X + -650, Y + -850))
      break;
    case "vent":
      entities.push(new surface(X + -700, Y + -800, X + -1000, Y + -800))
      entities.push(new surface(X + 0, Y + -800, X + -500, Y + -800))

      entities.push(new surface(X + -500, Y + -800, X + -550, Y + -850))
      entities.push(new surface(X + -650, Y + -850, X + -700, Y + -800))

      entities.push(new surface(X + -550, Y + -850, X + -550, Y + -1100))
      entities.push(new surface(X + -650, Y + -1100, X + -650, Y + -850))

      entities.push(new vent(X + -550, Y + -850, X + -650, Y + -850))
      break;
    default:
  }

  switch (data.upR) {
    case "closed":
      entities.push(new surface(X + 1000, Y + -800, X + 0, Y + -800))
      break;
    case "open":
      entities.push(new surface(X + 500, Y + -800, X + 0, Y + -800))
      entities.push(new surface(X + 1000, Y + -800, X + 700, Y + -800))

      entities.push(new surface(X + 550, Y + -850, X + 500, Y + -800))
      entities.push(new surface(X + 700, Y + -800, X + 650, Y + -850))

      entities.push(new surface(X + 550, Y + -1100, X + 550, Y + -850))
      entities.push(new surface(X + 650, Y + -850, X + 650, Y + -1100))
      break;
    case "vent":
      entities.push(new surface(X + 500, Y + -800, X + 0, Y + -800))
      entities.push(new surface(X + 1000, Y + -800, X + 700, Y + -800))

      entities.push(new surface(X + 550, Y + -850, X + 500, Y + -800))
      entities.push(new surface(X + 700, Y + -800, X + 650, Y + -850))

      entities.push(new surface(X + 550, Y + -1100, X + 550, Y + -850))
      entities.push(new surface(X + 650, Y + -850, X + 650, Y + -1100))

      entities.push(new vent(X + 650, Y + -850, X + 550, Y + -850))
      break;
    default:
  }

  if (data.left == "closed") {
    entities.push(new surface(X + -1200, Y + -600, X + -1200, Y + 0)) // walls
  }
  if (data.right == "closed") {
    entities.push(new surface(X + 1200, Y + 0, X + 1200, Y + -600))
  }

}

class scannable {
  constructor(X, Y, content) {
    this.pos = new Vector(X, Y);
    this.content = content
    this.playerpos = new Vector(0, 0)
    this.playerscanning = false
    this.scanning = false
    this.completion = 5000


    eventHandler.bindListener(this, "playerMoved", function (target, data) { target.playerpos.setXY(data.X, data.Y); target.playerscanning = data.scanning });
    eventHandler.bindListener(this, "physics_update", function (target, data) {
      let dist = target.pos.dist(target.playerpos)
      target.scanning = false
      if (dist < 250 && target.playerscanning) { target.scanning = true }
      if (target.scanning) { target.completion -= DT }
    })
  }
  draw() {
    let tpX = transformX(this.pos.X)
    let tpY = transformY(this.pos.Y)
    let playerX = transformX(this.playerpos.X)
    let playerY = transformY(this.playerpos.Y)

    let windowposX = (this.pos.X + ((this.playerpos.X))) - 100
    let windowposY = (this.pos.Y + ((this.playerpos.Y))) - 100

    ctx.lineWidth = 1;

    if (this.scanning) {
      let offset = ((Math.sin((-time) / 100) + 1) * 48);
      ctx.drawImage(player_scangrid, tpX - 48, tpY - 48, 97, 97);
      ctx.drawImage(player_scanline, tpX - 48 + offset, tpY - 48, 3, 97);
      ctx.strokeStyle = "#34ebbaf0";
      ctx.beginPath();
      ctx.moveTo(playerX, playerY);
      ctx.lineTo(tpX - 48, tpY - 48);
      ctx.moveTo(playerX, playerY);
      ctx.lineTo(tpX + 48, tpY - 48);
      ctx.moveTo(playerX, playerY);
      ctx.lineTo(tpX + 48, tpY + 48);
      ctx.moveTo(playerX, playerY);
      ctx.lineTo(tpX - 48, tpY + 48);
      ctx.moveTo(playerX, playerY);
      ctx.lineTo(tpX - 47 + offset, tpY + 48);
      ctx.moveTo(playerX, playerY);
      ctx.lineTo(tpX - 47 + offset, tpY - 48);
      ctx.moveTo(playerX, playerY);
      ctx.lineTo(tpX - 47 + offset, tpY - 49 + ((Math.sin((-time * 30) / 100) + 1) * 48));
      ctx.stroke();

      if (this.completion > 0) {
        ctx.drawImage(player_scannerblurb, centerOfCanvas.X - 15 + windowposX, centerOfCanvas.Y - 15 + windowposY, 100, 119);
        ctx.drawImage(player_scannerblurb, centerOfCanvas.X - 2 + windowposX, centerOfCanvas.Y + 5 + windowposY, 75, 75);
        ctx.fillStyle = "#34ebba";
        ctx_text.font = "12px Courier New"
        ctx_text.fillText("SCANNING...", centerOfCanvas.X + windowposX, centerOfCanvas.Y + windowposY - 1);
        ctx.fillStyle = "#34ebba";
        ctx.fillRect(centerOfCanvas.X + windowposX, centerOfCanvas.Y + windowposY + 88, (((5000 - this.completion) / 5000) * 73), 8)
        ctx_text.font = "16px Courier New"
        ctx_text.fillText("[       ]", centerOfCanvas.X + windowposX - 7, centerOfCanvas.Y + windowposY + 96);

        let tPP = ((Math.sin((time + 360) / 100) + 1) * 15)
        let tPN = ((Math.sin((time - 360) / 100) + 1) * 15)
        let tNP = ((Math.sin((-time + 360) / 100) + 1) * 15)
        let tNN = ((Math.sin((-time - 360) / 100) + 1) * 15)

        let p1X = (centerOfCanvas.X + tNN + 20) + windowposX
        let p1Y = (centerOfCanvas.Y + tNP + 25) + 2 + windowposY
        let p2X = (centerOfCanvas.X + tPP + 20) + windowposX
        let p2Y = (centerOfCanvas.Y + tNN + 25) + 2 + windowposY
        let p3X = (centerOfCanvas.X + tNN + 20) + windowposX
        let p3Y = (centerOfCanvas.Y + tPP + 25) + 2 + windowposY
        let p4X = (centerOfCanvas.X + tPP + 20) + windowposX
        let p4Y = (centerOfCanvas.Y + tPN + 25) + 2 + windowposY
        ctx.strokeStyle = "#34ebba";
        ctx.beginPath();
        ctx.moveTo(p1X, p1Y)
        ctx.lineTo(p2X, p2Y)
        ctx.moveTo(p2X, p2Y)
        ctx.lineTo(p3X, p3Y)
        ctx.moveTo(p3X, p3Y)
        ctx.lineTo(p4X, p4Y)
        ctx.moveTo(p4X, p4Y)
        ctx.lineTo(p1X, p1Y)
        ctx.stroke();
      } else {
        ctx.drawImage(player_scannerblurb, centerOfCanvas.X - 15 + windowposX, windowposY + centerOfCanvas.Y - 15, 200, 200);
        let count = this.content.length;
        for (let i = 0; i < count; i++) {
          let line = this.content[i];
          ctx.fillStyle = "#34ebba";
          ctx.fillText(line, windowposX + centerOfCanvas.X, windowposY + centerOfCanvas.Y + i * 10)
        }
      }
    } else {
      ctx.save();
      ctx.strokeStyle = "#34ebba50";
      ctx.font = "12px Courier New";
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.fillText("[OBJECT OF INTEREST]", tpX - 50, tpY - 80);
      ctx.moveTo(tpX + 40, tpY - 77);
      ctx.lineTo(tpX + 40, tpY - 45);
      ctx.lineTo(tpX, tpY);
      ctx.stroke();
      ctx.restore();
    }
  }
}

class vent {
  constructor(X, Y, X1, Y1) {

    this.pos = new Vector(X, Y);
    this.pos1 = new Vector(X1, Y1);
    this.playerpos = new Vector(0, 0)
    this.playervel = new Vector(0, 0)
    let DX = (X1 - X)
    let DY = (Y1 - Y)
    this.normal = new Vector(-DY, DX)
    this.middle = new Vector(this.pos.X + (this.pos1.X - this.pos.X) / 2, this.pos.Y + (this.pos1.Y - this.pos.Y) / 2)
    this.radius = this.pos.dist(this.pos1)
    this.broken = false
    this.disttoplayer = 0

    eventHandler.bindListener(this, "playerMoved", function (target, data) {
      if (!target.broken) {
        target.playerpos.setXY(data.X, data.Y)
        target.playervel.setXY(data.VX, data.VY)


        target.disttoplayer = target.middle.dist(target.playerpos)

        if (target.disttoplayer < target.radius) {
          target.disttoplayer = distToLine(target.pos, target.pos1, target.playerpos)
          if (target.disttoplayer < 10 && !target.broken) {
            if (target.playervel.distXY(0, 0) > .68) {
              target.broken = true
              //play break sound here
              //spawn gibs / particle effects?
            }
            eventHandler.raiseEvent("playerCollides", target)
          }
        }
      }

    });
  }

  draw() {
    let tpX = transformX(this.pos.X)
    let tpY = transformY(this.pos.Y)
    let tpX1 = transformX(this.pos1.X)
    let tpY1 = transformY(this.pos1.Y)

    if (debug) {
      ctx.strokeStyle = "#34ebba"
      ctx.lineWidth = 1;

      if (this.broken) {
        ctx.strokeStyle = "#34ebba50"
        ctx.lineWidth = 1;
      }

      ctx.beginPath();
      ctx.moveTo(tpX, tpY);
      ctx.lineTo(tpX1, tpY1);
      ctx.stroke();

      ctx.strokeStyle = "#ff000050"
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(transformX(this.normal.X * 10) + this.pos.X + (this.pos1.X - this.pos.X) / 2, transformY(this.normal.Y * 10) + this.pos.Y + (this.pos1.Y - this.pos.Y) / 2);
      ctx.lineTo(transformX(this.pos.X) + (this.pos1.X - this.pos.X) / 2, transformY(this.pos.Y) + (this.pos1.Y - this.pos.Y) / 2);
      ctx.stroke();
      if (this.disttoplayer < this.radius) { ctx.strokeStyle = "#00ff0050" }
      ctx.beginPath();
      ctx.arc(transformX(this.middle.X), transformY(this.middle.Y), this.radius, 0, 2 * Math.PI);
      ctx.stroke();


      if (this.broken) { ctx_text.fillText("vent broken", transformX(this.middle.X), transformY(this.middle.Y) + 20) }
      else {
        ctx_text.fillText(this.disttoplayer, transformX(this.middle.X), transformY(this.middle.Y));
        if (this.disttoplayer < this.radius) {
          ctx_text.fillText("check type: dist to line", transformX(this.middle.X), transformY(this.middle.Y) + 20)
        } else {
          ctx_text.fillText("check type: radius check", transformX(this.middle.X), transformY(this.middle.Y) + 20)
        }
      }
    }
  }
}


class surface {
  constructor(X, Y, X1, Y1) {

    this.pos = new Vector(X, Y);
    this.pos1 = new Vector(X1, Y1);
    this.playerpos = new Vector(0, 0)
    let DX = (X1 - X)
    let DY = (Y1 - Y)
    this.normal = new Vector(-DY, DX)
    this.middle = new Vector(this.pos.X + (this.pos1.X - this.pos.X) / 2, this.pos.Y + (this.pos1.Y - this.pos.Y) / 2)
    this.radius = this.pos.dist(this.pos1)
    this.disttoplayer = 0

    eventHandler.bindListener(this, "playerMoved", function (target, data) {
      target.playerpos.setXY(data.X, data.Y)

      target.disttoplayer = target.middle.dist(target.playerpos)

      if (target.disttoplayer < target.radius) {
        target.disttoplayer = distToLine(target.pos, target.pos1, target.playerpos)
        if (target.disttoplayer < 15) { eventHandler.raiseEvent("playerCollides", target) }
      }
    });


  }
  draw() {
    if (debug) {
      let tpX = transformX(this.pos.X)
      let tpY = transformY(this.pos.Y)
      let tpX1 = transformX(this.pos1.X)
      let tpY1 = transformY(this.pos1.Y)

      ctx.strokeStyle = "#34ebba"
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(tpX, tpY);
      ctx.lineTo(tpX1, tpY1);
      ctx.stroke();

      ctx.strokeStyle = "#ff000050"
      ctx.lineWidth = 1;
      //ctx.beginPath();
      //ctx.moveTo(transformX(this.normal.X * 10) + this.pos.X + (this.pos1.X - this.pos.X) / 2, transformY(this.normal.Y * 10) + this.pos.Y + (this.pos1.Y - this.pos.Y) / 2);
      //ctx.lineTo(transformX(this.pos.X) + (this.pos1.X - this.pos.X) / 2, transformY(this.pos.Y) + (this.pos1.Y - this.pos.Y) / 2);
      //ctx.stroke();
      //if (this.disttoplayer < this.radius) { ctx.strokeStyle = "#00ff0050" }
      //ctx.beginPath();
      //ctx.arc(transformX(this.middle.X), transformY(this.middle.Y), this.radius, 0, 2 * Math.PI)
      //ctx.stroke();

      ctx_text.fillText(this.disttoplayer, transformX(this.middle.X), transformY(this.middle.Y));

      if (this.disttoplayer < this.radius) {
        ctx_text.fillText("check type: dist to line", transformX(this.middle.X), transformY(this.middle.Y) + 20)
      } else {
        ctx_text.fillText("check type: radius check", transformX(this.middle.X), transformY(this.middle.Y) + 20)
      }
    }
  }
}

class gameTrigger {
  /**
   * Trigger that detects if player passes within
   * @param {*} X Position x
   * @param {*} Y Position y
   * @param {*} X1 Width
   * @param {*} Y1 Height
   */
  constructor(X, Y, X1, Y1) {
    this.pos = new Vector(X, Y);
    this.width = new Vector(X1, Y1);

    eventHandler.bindListener(this, "playerMoved", function (target, data) {
      if (data.X >= target.pos.X && data.X <= target.pos.X + target.width.X && data.Y >= target.pos.Y && data.Y <= target.pos.Y + target.width.Y) {
        console.log("excellent! You are within the bounds of the trigger");//if you're cool and within the trigger, this will be logged and you can do whatever
      }
    })
  }

  draw() {
    if (debug) {
      let tpX = centerOfCanvas.X + (this.pos.X - camera.pos.X) // set transforms for the center of the canvas, the image width, and cameras relative position to the player.
      let tpY = centerOfCanvas.Y + (this.pos.Y - camera.pos.Y)

      ctx.beginPath();
      ctx.fillStyle = "#FF69B460"; //hot pink but transparents
      ctx.fillRect(tpX, tpY, this.width.X, this.width.Y);
      ctx.stroke();
    }
  }
}

class WormSegment {
  constructor(X, Y, length) {
    this.daccX = new Vector(-.025, 0);
    this.daccY = new Vector(0, -.025);

    this.speedcap = new Vector(1, 1)

    this.acc = new Vector(0.002, 0.002);

    this.moveVector = new Vector(0, 0);
    this.pos = new Vector(X, Y);
    this.vel = new Vector(0, 0);

    this.normal = new Vector(0, 0)

    if (length > 1) {
      this.segment = new WormSegment(X, Y, length - 1)
      console.log("created worm segment #" + length)
    } else {
      this.segment = null
    }
    this.segmentnumber = length
  }
  update(segmentSize, parentposition) {
    let DX = (parentposition.X - this.pos.X)
    let DY = (parentposition.Y - this.pos.Y)
    this.normal.setXY(DX / 100, DY / 100)
    //let dir = Math.atan2(DY, DX)

    this.error = segmentSize - this.pos.distXY(parentposition.X, parentposition.Y)

    //console.log(this.segmentnumber + " | " + this.error + " | " + this.pos.getXY())
    let force = -this.error / 10
    if (this.segment) { this.segment.update(segmentSize, this.pos) }

    this.vel.applyforceToDest_OT(this.vel, this.daccX, DT)
    this.vel.applyforceToDest_OT(this.vel, this.daccY, DT)

    this.vel.X = ((this.normal.X * force) + (this.vel.X * 9)) / 10
    this.vel.Y = ((this.normal.Y * force) + (this.vel.Y * 9)) / 10
    this.vel.clamp(2, -2, 2, -2)
    this.pos.add_OT(this.vel, DT);


  }

  draw(segmentSize, parentposition) {
    let tpX = centerOfCanvas.X + (this.pos.X - camera.pos.X) // set transforms for the center of the canvas, the image width, and cameras relative position to the player.
    let tpY = centerOfCanvas.Y + (this.pos.Y - camera.pos.Y)

    if (debug) {
      ctx.lineWidth = "1";
      ctx.strokeStyle = "#00ff00";
      ctx.beginPath();
      ctx.arc(tpX, tpY, segmentSize / 2, 0, 2 * 3.14)
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(tpX, tpY);
      ctx.lineTo(tpX + this.normal.X * 30 * Math.sign(this.error), tpY + this.normal.Y * 30 * Math.sign(this.error));
      ctx.stroke();
    }
    if (this.segment != null) { this.segment.draw(segmentSize, this.pos) }
  }
}

class WormHead {
  /**
   * 
   * @param {*} X  pos X
   * @param {*} Y  pos Y 
   */
  constructor(X, Y, length) {

    this.daccX = new Vector(-.25, 0);
    this.daccY = new Vector(0, -.25);

    this.speedcap = new Vector(.9, .9)

    this.acc = new Vector(0.002, 0.002);

    this.moveVector = new Vector(0, 0);
    this.pos = new Vector(X, Y);
    this.vel = new Vector(0, 0);

    this.length = length

    this.segmentSize = 80 // bounding radius for the legs

    this.segment = new WormSegment(X, Y, length - 1)

    eventHandler.bindListener(this, "playerMoved", function (target, data) { // when the player moves do checks to ensure its
      target.pos.X = data.X;
      target.pos.Y = data.Y;
    })

    eventHandler.bindListener(this, "physics_update", function (target, data) {
      target.moveVector.setXY(0, 0);
      target.segment.update(target.segmentSize, target.pos)
    });

  }
  draw() {
    let tpX = centerOfCanvas.X - 25 + (this.pos.X - camera.pos.X) // set transforms for the center of the canvas, the image width, and cameras relative position to the player.
    let tpY = centerOfCanvas.Y - 25 + (this.pos.Y - camera.pos.Y)

    if (debug) {
      ctx.lineWidth = "1";
      ctx.strokeStyle = "#00ff00";
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, this.segmentSize / 2, 0, 2 * 3.14)
      ctx.stroke();
    }

    this.segment.draw(this.segmentSize, this.pos)
  }
}


class enemyleg {
  /**
   * a single leg? bit? piece? of the blob enemy
   * @param {*} X pos X
   * @param {*} Y pos Y
   */
  constructor(X, Y) {
    this.targetpos = new Vector(X, Y)
    this.daccX = new Vector(-.25, 0);
    this.daccY = new Vector(0, -.25);

    this.speedcap = new Vector(1, 1)

    this.acc = new Vector(0.004, 0.004);

    this.moveVector = new Vector(0, 0);
    this.pos = new Vector(X, Y);
    this.vel = new Vector(0, 0);

  }
  /**
   * physics update but for the legs of the blobs
   * @param {*} bodyposX position of the body (X)
   * @param {*} bodyposY position of the body (Y)
   * @param {*} bodydirX intended move direction of the body (X)
   * @param {*} bodydirY intended move direction of the body (Y)
   * @param {*} enraged is the player close enough to me for me to see them
   * @param {*} legarea whats the max radius a leg can be away from the bodies center point
   */
  legupdate(bodyposX, bodyposY, bodydirX, bodydirY, enraged, legarea) {
    // IK stuff here
    bodyposX += bodydirX * 50
    bodyposY += bodydirY * 50

    let legdist = this.targetpos.distXY(bodyposX, bodyposY)
    if (legdist > legarea) {
      this.targetpos.X = ((Math.random() - .5) * 2 * legarea) + bodyposX
      this.targetpos.Y = ((Math.random() - .5) * 2 * legarea) + bodyposY
    }

    this.moveVector.setXY(0, 0);

    let difX = (this.targetpos.X - this.pos.X)// we obtain numerous differences or deviations.
    let difY = (this.targetpos.Y - this.pos.Y)// distance from my intended position

    this.moveVector.X = difX * (Math.pow(difX, 2)) / 2000 - (this.vel.X) * 1000 // curve math to decide how hard i should be moving
    this.moveVector.Y = difY * (Math.pow(difY, 2)) / 2000 - (this.vel.Y) * 1000

    this.moveVector.applyforceToDest_OT(this.vel, this.daccX, DT)
    this.moveVector.applyforceToDest_OT(this.vel, this.daccY, DT)

    this.moveVector.clamp(1, -1, 1, -1) //clamp vector from values +1 to -1

    if (enraged) {
      this.moveVector.multXY(1.5, 1.5)
    }

    this.vel.applyforceToDest_OT(this.moveVector, this.acc, DT);

    this.vel.clamp(this.speedcap.X, -this.speedcap.X, this.speedcap.Y, -this.speedcap.Y) // apply speedcap

    this.pos.add_OT(this.vel, DT); //move the leg
  }
  draw(enraged) {

    let tpX = centerOfCanvas.X - 5 + (this.pos.X - camera.pos.X) // set transforms for the center of the canvas, the image width, and cameras relitave position to the player.
    let tpY = centerOfCanvas.Y - 5 + (this.pos.Y - camera.pos.Y)
    //console.log(enraged)
    if (enraged) {
      ctx.drawImage(sporemonster_enraged, tpX, tpY, 20, 20);
    } else {
      ctx.drawImage(sporemonster, tpX, tpY, 20, 20);
    }

  }
}

class testenemy {
  /**
   * 
   * @param {*} X  pos X
   * @param {*} Y  pos Y 
   */
  constructor(X, Y) {

    this.daccX = new Vector(-.25, 0);
    this.daccY = new Vector(0, -.25);

    this.speedcap = new Vector(.9, .9)

    this.acc = new Vector(0.002, 0.002);

    this.moveVector = new Vector(0, 0);
    this.pos = new Vector(X, Y);
    this.vel = new Vector(0, 0);

    this.legarea = 40 // bounding radius for the legs
    this.damageCirlce = 25 // bounding radius for damaging the player
    this.enrageCircle = 250 // bounding radius for player detection


    this.sporeAlertPos = new Vector(X, Y)
    this.sporeAlertPosAge = 0

    this.enraged = false // is the player close to me?

    this.legs = [] // contains all 'leg' sub objects

    for (let i = 0; i < 18; i++) {
      this.legs.push(new enemyleg(X, Y))
    } //populate legs list with legs


    eventHandler.bindListener(this, "sporeCollisionAlert", function (target, data) {
      target.sporeAlertPos.X = data.X // if player gets close enough this is how we tell our freinds about them.
      target.sporeAlertPos.Y = data.Y
      target.sporeAlertPosAge = 0
    })

    eventHandler.bindListener(this, "playerMoved", function (target, data) { // when the player moves do checks to ensure its
      target.distanceToPlayer = target.pos.distXY(data.X, data.Y);
      if (target.distanceToPlayer < target.enrageCircle) {
        if (target.distanceToPlayer < target.damageCirlce) {
          eventHandler.raiseEvent("playerTakesDamage", new Object({ damage: 10 }))
        }
        target.sporeAlertPos.X = data.X // if player gets close enough this is how we tell our freinds about them.
        target.sporeAlertPos.Y = data.Y
        target.sporeAlertPosAge = 0
        target.enraged = true // make sure we are angry when the player is close
      } else {
        target.enraged = false // but not if they are too far away
      }


    })

    eventHandler.bindListener(this, "physics_update", function (target, data) {
      target.moveVector.setXY(0, 0);

      if ((target.sporeAlertPosAge) < 1000) {

        target.sporeAlertPosAge++
        let difX = (target.sporeAlertPos.X - target.pos.X)// we obtain numerous differences or deviations.
        let difY = (target.sporeAlertPos.Y - target.pos.Y)

        if (target.pos.dist(sporeAlertPos) < 1000) {

          target.moveVector.X = difX * (Math.pow(difX, 2)) / 5000 - (target.vel.X) * 50 // curve math to define how hard we should be trying to move.
          target.moveVector.Y = difY * (Math.pow(difY, 2)) / 5000 - (target.vel.Y) * 50
        }
      }

      target.moveVector.applyforceToDest_OT(target.vel, target.daccX, DT) // apply decellerations
      target.moveVector.applyforceToDest_OT(target.vel, target.daccY, DT)

      target.moveVector.clamp(1, -1, 1, -1) //clamp vector from values +1 to -1

      if (target.enraged) {
        target.moveVector.multXY(2, 2)
      }

      target.moveVector.X += (Math.random() - .5) * 5
      target.moveVector.Y += (Math.random() - .5) * 5

      target.vel.applyforceToDest_OT(target.moveVector, target.acc, DT); // apply acc based off moveVector


      let scX = target.speedcap.X
      let scY = target.speedcap.Y
      target.vel.clamp(scX, -scX, scY, -scY) //speedcap

      target.pos.add_OT(target.vel, DT); // move

      let len = target.legs.length;
      for (let i = 0; i < len; i++) {
        if (target.legs[i]) { target.legs[i].legupdate(target.pos.X, target.pos.Y, target.moveVector.X, target.moveVector.Y, target.enraged, target.legarea) }
      }
    });

  }
  draw() {
    let tpX = centerOfCanvas.X - 25 + (this.pos.X - camera.pos.X) // set transforms for the center of the canvas, the image width, and cameras relative position to the player.
    let tpY = centerOfCanvas.Y - 25 + (this.pos.Y - camera.pos.Y)

    ctx.drawImage(sporemonster, tpX, tpY, 20, 20);

    let len = this.legs.length;
    for (let i = 0; i < len; i++) {
      if (this.legs[i]) { this.legs[i].draw(this.enraged) }// finally draw all the entities in the list.
    }

    if (debug) {
      ctx.lineWidth = "1";
      ctx.strokeStyle = "#00ff00";
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, this.legarea, 0, 2 * 3.14)
      ctx.stroke();
      ctx.strokeStyle = "#ff0000";
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, this.damageCirlce, 0, 2 * 3.14)
      ctx.stroke();
      ctx.strokeStyle = "#0000ff";
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, this.enrageCircle, 0, 2 * 3.14)
      ctx.stroke();




    }
  }
}

class backgroundSprite { // a terrible and temporary implementation of a background sprite.
  constructor(images, swaplistener, posX, posY) {
    this.visible = true
    this.images = images
    this.imgcounter = 0
    this.opacity = 1
    this.pos = new Vector(posX, posY)

    eventHandler.bindListener(this, swaplistener, function (target, keyevent) {
      if (keyevent.data.code == "KeyI") {
        if (target.imgcounter < target.images.length - 1) {
          target.imgcounter++;
        } else {
          target.imgcounter = 0
        }
      }
    });

  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(this.images[this.imgcounter], this.pos.X - camera.pos.X + centerOfCanvas.X, this.pos.Y - camera.pos.Y + centerOfCanvas.Y);
    ctx.restore();
  }
}

class animationwrapper { // a terrible and temporary implementation for animations.
  constructor(X, Y, ml) {
    this.pos = new Vector(X, Y)
    this.framecounter = 0
    this.name = null
    //this.target
    this.maxlength = ml
  }

  trigger(target, AnimName) {
    this.target = target;
    this.name = AnimName;
    this.framecounter = 0;
    entities.push(this);
  }

  draw(i, deltatime) {
    if (this.framecounter <= 100 && this.target) {
      animations[this.name](this.target.pos, this.framecounter)
      this.framecounter += (deltatime / 16.777777777)
      if (this.framecounter > this.maxlength) {
        this.framecounter = 0
        entities.splice(i, 1);
        this.target = null
      }
    }
  }
}

class Player {
  /**
   * 
   * @param {*} X pos X
   * @param {*} Y pos Y
   * @param {*} Keys list of keybindings [up,left,down,right,ability]
   */
  constructor(X, Y, Keys) {

    this.animwrapper = new animationwrapper(0, 0, 50)

    camera.follow = this


    this.daccX = new Vector(-.25, 0);
    this.daccY = new Vector(0, -.25);

    this.speedcap = 1.4

    this.acc = new Vector(0.001, 0.001);

    this.moveVector = new Vector(0, 0);
    this.pos = new Vector(X, Y);
    this.vel = new Vector(0, 0);

    this.stored = new Vector(0, 0)
    this.releasedir = 0

    this.keys = Keys
    this.w = false
    this.a = false
    this.s = false
    this.d = false
    this.e = false

    this.boosttimer = 0
    this.boostcap = 1

    this.regentimer = 0
    this.health = 100
    this.iframes = 0
    this.deadtimer = 0
    this.lastdamage = 0

    this.MoveKeyHeldX = false
    this.MoveKeyHeldY = false

    eventHandler.bindListener(this, "playerTakesDamage", function (target, data) {
      if (target.iframes <= 0) {
        target.health -= data.damage
        target.iframes = 250
        target.lastdamage = data.damage
        if (target.health <= 0) { target.die() }

      }
    })


    eventHandler.bindListener(this, "playerCollides", function (target, data) {
      let newvelX = target.vel.X
      let newvelY = target.vel.Y

      if (Math.sign(target.vel.X) === Math.sign(data.normal.X) || Math.sign(target.vel.Y) === Math.sign(data.normal.Y)) {
        target.pos.X = target.pos.X - Math.sign(data.normal.X)
        target.pos.Y = target.pos.Y - Math.sign(data.normal.Y)

        if (Math.sign(target.vel.X) === Math.sign(data.normal.X)) { newvelX = 0 }
        if (Math.sign(target.vel.Y) === Math.sign(data.normal.Y)) { newvelY = 0 }
      }

      target.vel.X = newvelX
      target.vel.Y = newvelY

    })

    eventHandler.bindListener(this, "keyPressed", function (target, keyevent) {// bring in keypresses and convert them to 1 of 4 bools
      if (keyevent.data.code == target.keys[0]) { target.w = true; }
      if (keyevent.data.code == target.keys[1]) { target.a = true; }
      if (keyevent.data.code == target.keys[2]) { target.s = true; }
      if (keyevent.data.code == target.keys[3]) { target.d = true; }
      if (keyevent.data.code == target.keys[4]) { target.AbilityTrigger(); }
      if (keyevent.data.code == target.keys[5]) { target.e = true; }

    });

    eventHandler.bindListener(this, "keyReleased", function (target, keyevent) {// bring in keypresses and convert them to 1 of 4 bools
      if (keyevent.data.code == target.keys[0]) { target.w = false; }
      if (keyevent.data.code == target.keys[1]) { target.a = false; }
      if (keyevent.data.code == target.keys[2]) { target.s = false; }
      if (keyevent.data.code == target.keys[3]) { target.d = false; }
      if (keyevent.data.code == target.keys[5]) { target.e = false; }

    });

    eventHandler.bindListener(this, "physics_update", function (target, data) {// same thing as an update loop, called once every iteration of update loop.
      target.moveVector.setXY(0, 0);// zero out move vect to stop it compounding over time and getting stuck at values
      target.MoveKeyHeldX = false // used later to determine whether thruster audio should be playing or not
      target.MoveKeyHeldY = false

      if (target.w) { target.moveVector.addXY(0, -1); target.MoveKeyHeldY = true }// 4 bools to a vector and one bool
      if (target.s) { target.moveVector.addXY(0, 1); target.MoveKeyHeldY = true }
      if (target.a) { target.moveVector.addXY(-1, 0); target.MoveKeyHeldX = true }
      if (target.d) { target.moveVector.addXY(1, 0); target.MoveKeyHeldX = true }

      if (!target.MoveKeyHeldX && target.boosttimer < 1) { target.moveVector.applyforceToDest_OT(target.vel, target.daccX, DT) }
      if (!target.MoveKeyHeldY && target.boosttimer < 1) { target.moveVector.applyforceToDest_OT(target.vel, target.daccY, DT) }

      if (target.boosttimer > 0) { target.boosttimer -= 1 }
      if ((target.MoveKeyHeldX || target.MoveKeyHeldY) && target.boosttimer < 600) { target.boosttimer = 0 }

      //apply the auto de accelleration to the player
      target.moveVector.clamp(1, -1, 1, -1) //clamp vector from values +1 to -1
      target.vel.applyforceToDest_OT(target.moveVector, target.acc, DT); // apply a force to the veloctiy based on the moveVector and the acceleration constant.

      if (target.deadtimer > 0) {
        target.deadtimer--
      }
      if (target.iframes > -400) {
        target.iframes--
      }

      if (target.boosttimer == 0) {
        if (target.vel.distXY(0, 0) > target.speedcap) {
          target.vel.X *= .99
          target.vel.Y *= .99
        }
      }

      target.pos.add_OT(target.vel, DT);// move the player (this will get replaced later with a raiseEvent("Entity_requestMove,new Object({pos:player pos, requestedpos:player pos + player vel})"))

      eventHandler.raiseEvent("playerMoved", new Object({// tell the camera that we moved to new a new pos
        X: target.pos.X,
        Y: target.pos.Y,
        VX: target.vel.X,
        VY: target.vel.Y,
        scanning: target.e
      }))
    });
  }
  die() {  // oh no! our table! it's broken! (player died... imagine losing)
    focused = false
    this.deadtimer = 100
    this.vel.setXY(0, 0);
    this.stored.setXY(0, 0)
    this.pos.setXY(0, 0);
    this.health = 100
    eventHandler.raiseEvent("player_died", new Object({
      X: this.pos.X,
      Y: this.pos.Y,
    }))
  }


  AbilityTrigger() {
    if (this.animwrapper.framecounter == 0 && focused) {
      if (this.stored.distXY(0, 0) < .1) {
        if (this.vel.distXY(0, 0) > .1) {
          this.stored.setXY(this.vel.X, this.vel.Y)
          if (this.stored.distXY(0, 0) > this.boostcap) {
            this.stored.X *= .99
            this.stored.Y *= .99
          }
          this.vel.setXY(0, 0)
          eventHandler.raiseEvent("shakeCamera", new Object({ Strength: 2, Duration: 50 }))
          this.animwrapper.trigger(this, "player_StoreMomentum")
          ability_charge.stop();
          ability_charge.play();

          //end constant loop and play tail end of sound
          if (thruster_loop.playing()) {
            thruster_loop.stop();
            thruster_end.play();
          }
        }
      } else {
        if (this.MoveKeyHeldX || this.MoveKeyHeldY) {
          let power = this.stored.distXY(0, 0)
          if (this.MoveKeyHeldX && this.MoveKeyHeldY) { this.vel.addXY(power * this.moveVector.X, power * this.moveVector.Y) }
          if (this.MoveKeyHeldX && !this.MoveKeyHeldY) { this.vel.addXY(power * this.moveVector.X, -this.vel.Y) }
          if (!this.MoveKeyHeldX && this.MoveKeyHeldY) { this.vel.addXY(-this.vel.X, power * this.moveVector.Y) }

        } else {
          this.vel.addXY(this.stored.X, this.stored.Y)
        }
        eventHandler.raiseEvent("shakeCamera", new Object({ Strength: 2, Duration: 50 }))
        this.animwrapper.trigger(this, "player_ReleaseMomentum")
        ability_boost.stop();
        ability_boost.play();
        this.vel.clamp(2, -2, 2, -2)
        this.boosttimer = 750
        this.stored.setXY(0, 0)
      }
    }
  }

  draw() {
    let tpX = centerOfCanvas.X - 25 + (this.pos.X - camera.pos.X) // set transforms for the center of the canvas, the image width, and cameras relitave position to the player.
    let tpY = centerOfCanvas.Y - 25 + (this.pos.Y - camera.pos.Y)

    let thrusterOffSetH = ((-this.moveVector.X * 2) + Math.random() - 0.5) * 8 //adds flicker to the thrusters based on randomness (yaay!!!)
    let thrusterOffSetV = ((-this.moveVector.Y * 2) + Math.random() - 0.5) * 8

    ctx.drawImage(player_sprite_RCSjets_V, tpX, tpY + thrusterOffSetV, 50, 50);//draw the vertical jets onto the screen based off predetermined values
    ctx.drawImage(player_sprite_RCSjets_H, tpX + thrusterOffSetH, tpY, 50, 50);//draw the horizontal jets onto the screen based off predetermined values
    ctx.drawImage(playersprite, tpX, tpY, 50, 50);//draw the players sprite onto the screen based off predetermined values

    let storedpower = this.stored.distXY(0, 0)

    ctx.save();
    if (this.animwrapper.framecounter > 0) { ctx.globalAlpha = 15 / this.animwrapper.framecounter; }
    else { ctx.globalAlpha = 0 }
    ctx.drawImage(player_glow, tpX, tpY, 50, 50);
    ctx.restore();

    //if (this.e) { ctx.drawImage(player_glow, tpX, tpY, 50, 50); }


    if (storedpower > .1) { // supporting math for directional indicator, (X,Y to radians)
      let dir = 0

      if (this.MoveKeyHeldX || this.MoveKeyHeldY) {
        if (this.MoveKeyHeldX && this.MoveKeyHeldY) { dir = Math.atan2(this.moveVector.Y, this.moveVector.X) }
        if (this.MoveKeyHeldX && !this.MoveKeyHeldY) { dir = Math.atan2(0, this.moveVector.X) }
        if (!this.MoveKeyHeldX && this.MoveKeyHeldY) { dir = Math.atan2(this.moveVector.Y, 0) }
      } else {
        dir = Math.atan2(this.stored.Y, this.stored.X)
      } this.releasedir = (dir + this.releasedir * 2) / 3



      ctx.strokeStyle = "#e06fff" //show the player what direction they are gonna move when they release their stored velocity.
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, 60, (this.releasedir - .2), (this.releasedir + .2))
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, 60 + storedpower * 6, (this.releasedir - .15), (this.releasedir + .15))
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, 60 + storedpower * 12, (this.releasedir - .1), (this.releasedir + .1))
      ctx.stroke();
    }


    if (this.iframes > 10) {
      for (let i = 0; i < 100; i++) {
        let tmp = i + Math.sin(this.iframes)
        ctx.strokeStyle = "#ff00ff25"
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(tpX + 25, tpY + 25, 45, tmp * 2, tmp * 2)
        ctx.arc(tpX + 25, tpY + 25, 45, tmp * 10, tmp * 10)
        ctx.stroke();
      }
    }

    if (this.iframes > -400) {
      ctx.save();
      ctx.globalAlpha = (((Math.sin(time / 25)) / 5) + .8);

      ctx.strokeStyle = "#ff0000"
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, 60, 2 / 25, 1 / 25)
      ctx.arc(tpX + 25, tpY + 25, 65, 2 / 25, 1 / 25)
      ctx.stroke();
      ctx.strokeStyle = "#ff000050"
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, 60, 2 / 25, 1 / 25)
      ctx.arc(tpX + 25, tpY + 25, 65, 2 / 25, 1 / 25)
      ctx.stroke();

      for (let i = 0; i < (this.health + Math.max(Math.min(1, (this.iframes - 150) / 50), 0) * this.lastdamage); i++) {
        ctx.strokeStyle = "#ff0090"
        ctx.lineWidth = 1;

        if (i >= this.health) {
          ctx.strokeStyle = "#0000ff"
          ctx.lineWidth = 1;
        }

        ctx.beginPath();
        ctx.arc(tpX + 25, tpY + 25, 60, (i) / 16, i / 16)
        ctx.arc(tpX + 25, tpY + 25, 65, (i) / 16, i / 16)
        ctx.stroke();
        ctx.strokeStyle = "#ff009050"
        ctx.lineWidth = 5;

        if (i >= this.health) {
          ctx.strokeStyle = "#0000ff"
          ctx.lineWidth = 5;
        }

        ctx.beginPath();
        ctx.arc(tpX + 25, tpY + 25, 60, (i) / 16, i / 16)
        ctx.arc(tpX + 25, tpY + 25, 65, (i) / 16, i / 16)
        ctx.stroke();
      }

      for (let i = 0; i < 10; i++) {
        let tmp = -time / 100 + (i * .16)
        ctx.strokeStyle = "#ff0000" + (((10 - i) * .1) * 90).toFixed()
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(tpX + 25, tpY + 25, 0, tmp, tmp)
        ctx.arc(tpX + 25, tpY + 25, 65, tmp, tmp)
        ctx.stroke();
      }

    }

    ctx.restore();

    if (debug) {
      ctx.strokeStyle = "#ff0000"
      ctx.lineWidth = "1";
      ctx.beginPath();
      ctx.moveTo(tpX, tpY);
      ctx.lineTo(tpX + this.moveVector.X * 50, tpY + this.moveVector.Y * 50);// display a vector onscreen in the form of a line that shows the players "intended direction" (MoveVector)
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(tpX + 25, tpY + 25, 5, 0, 2 * 3.14)
      ctx.stroke();
      ctx.strokeStyle = "#0064ff"
      ctx.beginPath();
      ctx.moveTo(tpX, tpY);
      ctx.lineTo(tpX + this.vel.X * 50, tpY + this.vel.Y * 50); // display a vector onscreen in the form of a line that shows the players "actual direction" (velocity)
      ctx.stroke();
      ctx.strokeStyle = "#34ebba"
      ctx.beginPath();
      ctx.moveTo(tpX, tpY);
      ctx.lineTo(tpX + this.stored.X * 50, tpY + this.stored.Y * 50); // display a vector onscreen in the form of a line that shows the players "stored velocity"
      ctx.stroke();

    }
    if (helpmenu) {
      ctx.fillStyle = "#34ebba"
      ctx.font = "12px Courier New"
      let offset = 50
      ctx.fillText((this.keys[0].toUpperCase()), 500, 281 - offset)// show keybinds
      ctx.fillText((this.keys[1].toUpperCase()), 500 - offset, 281)
      ctx.fillText((this.keys[2].toUpperCase()), 500, 281 + offset)
      ctx.fillText((this.keys[3].toUpperCase()), 500 + offset, 281)
    }

    //player thruster audio
    if (this.MoveKeyHeldX || this.MoveKeyHeldY) {
      if (!thruster_loop.playing()) {
        thruster_loop.play()
      }
    }
    else if (thruster_loop.playing()) { //end constant loop and play tail end of sound
      thruster_loop.stop()
      thruster_end.play();
    }
  }
}

class Spore {
  static #spore_forcemodifier = new Vector(0.01, 0.01);
  static #spore_dacc = new Vector(-0.005, -0.005);
  static #spore_wander = new Vector(-0.0008, -0.0008);

  constructor(X, Y) {

    this.animwrapper = new animationwrapper(0, 0, 100)

    this.age = 1000;
    this.brightness = 0;
    this.pos = new Vector(X, Y);
    this.vel = new Vector(0, 0);
    this.veldif = new Vector(0, 0)
    this.Depth = Math.random()
    this.timeoffset = 0

    this.distanceToPlayer = 0
    eventHandler.bindListener(this, "playerMoved", function (target, data) {
      target.distanceToPlayer = target.pos.distXY(data.X, data.Y);
      target.brightness = ((Math.sin((-(time + target.timeoffset) + target.distanceToPlayer) / 100) + 1) + target.brightness * 20) / 21

      if (target.distanceToPlayer < 20 && target.brightness > .2 && target.Depth > .9) {
        target.timeoffset = 2500
        target.vel.X = -(data.X - target.pos.X) * Spore.#spore_forcemodifier.X + data.VX * .5
        target.vel.Y = -(data.Y - target.pos.Y) * Spore.#spore_forcemodifier.Y + data.VY * .5

        //spore collision audio 
        if (target.age < 1000) {// if we collide with a spore, play the noise and then immediatley set the spores age to 1000, this prevents further sounds from playing from that spore preventing overlapping sounds.
          let randomIndex = sporeCollisions[Math.floor(Math.random() * sporeCollisions.length)];

          target.veldif.X = (data.VX - target.vel.X)
          target.veldif.Y = (data.VY - target.vel.Y)

          let difvel = (target.veldif.distXY(0, 0))

          sporeHowls[randomIndex].volume(difvel / 2);
          sporeHowls[randomIndex].play();

          //I assume this is for debugging so I'm just gonna hide it for now
          //console.log(difvel)

          if (Math.floor(Math.random() * 3) == 1 && sporeAlert) {
            eventHandler.raiseEvent("sporeCollisionAlert", new Object({ X: target.pos.X, Y: target.pos.Y }))
            sporeHowlsAlert.play();
            target.animwrapper.trigger(target, "spore_soundwave")
          }

          target.age = 1000
        }
      }
      if (target.distanceToPlayer > 1000) { target.die(); }
    });

    eventHandler.bindListener(this, "physics_update", function (target, data) {
      target.vel.applyforce_OT(Spore.#spore_dacc, DT);
      target.vel.addXY((Math.random() - 0.5) * Spore.#spore_wander.X, (Math.random() - 0.5) * Spore.#spore_wander.Y, DT)

      target.pos.add_OT(target.vel, DT);

      if (target.age !== null) {
        target.age += 1;
        if (target.age > 1000 && target.brightness < .1) { target.die(); }
      }
    })
  }
  die() {
    this.pos.X = (camera.pos.X + ((Math.random() - 0.5) * 2000))
    this.pos.Y = (camera.pos.Y + ((Math.random() - 0.5) * 2000))
    this.vel.setXY(0, 0)
    this.timeoffset = 0
    this.age = 0
    this.brightness = 0
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.brightness;
    ctx.drawImage(particle_Spore, this.pos.X - (this.Depth * camera.pos.X) + centerOfCanvas.X - 5, this.pos.Y - (this.Depth * camera.pos.Y) + centerOfCanvas.Y - 5, ((this.Depth)) * 10, ((this.Depth)) * 10);
    if (this.timeoffset > 0) {
      this.timeoffset -= 25
      ctx.globalAlpha = 2 * this.brightness
      ctx.drawImage(sporeflash, this.pos.X - (this.Depth * camera.pos.X) + centerOfCanvas.X - 15, this.pos.Y - (this.Depth * camera.pos.Y) + centerOfCanvas.Y - 15, ((this.Depth)) * 30, ((this.Depth)) * 30);
    }
    ctx.restore();
  }
}

class Camera {
  /**
   * it's the camera, make sure to initalize it if you want, like, anything to work... at all....
   */
  constructor() {
    this.dacc = new Vector(-0.01, -0.01);
    this.acc = new Vector(0.01, 0.01);

    this.setpos = new Vector(0, 0) //target position
    this.playervel = new Vector(0, 0)
    this.moveVector = new Vector(0, 0) //intended direction
    this.pos = new Vector(0, 0); //actual pos
    this.vel = new Vector(0, 0); //actual direction

    this.cameraShakeStrength = 0 // how hard to shake the camera
    this.cameraShakeDuration = 0 // how long to shake the camera

    this.follow = null

    eventHandler.bindListener(this, "player_died", function (target, data) {
      target.setpos.setXY(data.X, data.Y) //target position
      target.pos.setXY(data.X, data.Y);

      target.playervel.setXY(0, 0)
      target.moveVector.setXY(0, 0) //intended direction
      target.vel.setXY(0, 0);

      focused = true
    });

    eventHandler.bindListener(this, "shakeCamera", function (target, data) {
      target.cameraShakeStrength = data.Strength
      target.cameraShakeDuration = data.Duration
    });

    eventHandler.bindListener(this, "physics_update", function (target, data) {
      if (target.follow) {
        target.setpos.X = target.follow.pos.X
        target.setpos.Y = target.follow.pos.Y
        target.playervel.X = target.follow.vel.X
        target.playervel.Y = target.follow.vel.Y
      }
      let difX = (target.setpos.X - target.pos.X)// we obtain numerous differences or deviations.
      let difY = (target.setpos.Y - target.pos.Y)// prev comment was funny but unhelpful, this just takes my position minus the players

      target.moveVector.X = difX * (Math.pow(difX, 2)) / 1000 - (target.vel.X - target.playervel.X) * 100//funky curve math, basically this is the response curve for the players distance from the camera.
      target.moveVector.Y = difY * (Math.pow(difY, 2)) / 1000 - (target.vel.Y - target.playervel.Y) * 100

      if (target.cameraShakeDuration > 0) {
        target.cameraShakeDuration -= 1
        target.pos.X += ((Math.random() - .5) * target.cameraShakeStrength)
        target.pos.Y += ((Math.random() - .5) * target.cameraShakeStrength)
      }


      target.vel.applyforceToDest(target.moveVector, target.acc);
      target.vel.applyforceToDest_OT(target.vel, target.dacc, DT);//same as player, apply de accelerations, accelerations, and position offsets.
      target.pos.X = ((target.pos.X) * 9 + (target.pos.X + target.vel.X * DT)) / 10
      target.pos.Y = ((target.pos.Y) * 9 + (target.pos.Y + target.vel.Y * DT)) / 10

    })
  }

}

class ExternalKeyListeners {// menu buttons that need to work even if the player is dead or otherwise missing from the scene.
  constructor() {
    eventHandler.bindListener(this, "sporeCollisionAlert", function (target, data) {
      sporeAlertPos.X = data.X
      sporeAlertPos.Y = data.Y
      sporeAlertPosAge = 0
    });

    eventHandler.bindListener(this, "keyPressed", function (target, keyevent) {
      if (keyevent.data.code == "KeyB") { debug = !debug }
      if (keyevent.data.code == "KeyC") { eventHandler.raiseEvent("playerTakesDamage", new Object({ damage: 1 })) }
      if (keyevent.data.code == "KeyH") { helpmenu = !helpmenu }
      if (keyevent.data.code == "Escape") { focused = !focused; }
      if (keyevent.data.code == "KeyM") { muteMusic = !muteMusic }
      if (keyevent.data.code == "Space") { mainmenu = false }
    });
  }
}