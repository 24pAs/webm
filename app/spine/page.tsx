'use client';

import Link from "next/link";
import {useEffect} from "react";
import {Application, Assets, Container} from "pixi.js";
import {Spine} from 'pixi-spine';

export default function SpineHome() {
  useEffect(() => {
    if(!document) return;
    const app = new Application({
      width: 600,
      height: 338
    });
    // @ts-ignore
    document.getElementById('spine').appendChild(app.view);

    Assets.load('/300001.json').then(onAssetsLoaded);
    // @ts-ignore
    function onAssetsLoaded(dragonAsset) {
      // instantiate the spine animation
      console.log('dragonAsset', dragonAsset);
      const dragon = new Spine(dragonAsset.spineData);
      console.log('dragon', dragon);
      dragon.skeleton.setToSetupPose();
      dragon.update(0);
      dragon.autoUpdate = false;

      // create a container for the spine animation and add the animation to it
      const dragonCage = new Container();
      dragonCage.addChild(dragon);

      // measure the spine animation and position it inside its container to align it to the origin
      const localRect = dragon.getLocalBounds();
      dragon.position.set(-localRect.x, -localRect.y);

      // now we can scale, position and rotate the container as any other display object
      const scale = Math.min(
        (app.screen.width) / dragonCage.width,
        (app.screen.height) / dragonCage.height,
      );
      dragonCage.scale.set(scale, scale);
      dragonCage.position.set(
        (app.screen.width - dragonCage.width) * 0.5,
        (app.screen.height - dragonCage.height) * 0.5,
      );

      // add the container to the stage
      app.stage.addChild(dragonCage);

      // once position and scaled, set the animation to play
      dragon.state.setAnimation(0, 'Appear', true);
      // dragon.state.setAnimation(100, 'Appear_02', true);
      // dragon.state.setAnimation(200, 'Appear_03', true);
      dragon.state.setAnimation(0, 'Disappear', true);
      // dragon.state.setAnimation(400, 'Disappear_02', true);
      // dragon.state.setAnimation(0, 'Disappear_03', true);
      dragon.state.setAnimation(0, 'Emotion', true);
      dragon.state.setAnimation(0, 'Greeting', true);
      // dragon.state.setAnimation(900, 'Greeting', true);
      dragon.state.setAnimation(0, 'Idle', true);
      dragon.state.setAnimation(0, 'Loop-3', true);
      app.ticker.add(() => {
        // update the spine animation, only needed if dragon.autoupdate is set to false
        dragon.update(app.ticker.deltaMS / 1000); // IN SECONDS!
      });
    }

  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex pb-5">
        <Link href={'/mp4'} className='text-blue-600'>mp4 video 보기 가기</Link>
        <Link href={'/webm'} className='text-blue-600'>webM video 보기 가기</Link>
      </div>
      <div id={'spine'}></div>
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex pt-5">
        <Link href={'/webm'} className='text-2xl'>spine video</Link>
      </div>
    </main>
  )
}
