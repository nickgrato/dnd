// A note about why I didn't use a sprite.

// **  Performance VS Ease of Use **
// Though a sprite is technically more performant, I think it can be less intuitive.
// I thought going down the more expressive route would be better in this senario. If this
// was a very large image where there would be a tangible performance hit I would
// reconsider this and most likely go back to using a sprite.

// ** Open-closed principle **
// I know this is more of a programming rule than an asset management rule, however, breaking
// the sprite into single images makes this feature more open to scaling and closed for edit.
// For example. Let's say we wanted to add a new asset as step 2 to have 10 steps in all. It might
// be also logical to assume the step correlates with how the spite is cropped in the CSS ( step 2
// is the second image).  Now that we added a new step, all the code pinpointing the steps after that
// would also potentially need to be updated. If the assets are singular then we just add a new
// talent in the talents array and pass it an image.

import StackTalent from "public/stack_talent.png"
import StackTalentActive from "public/stack_talent_active.png"
import SilverTalent from "public/silver_talent.png"
import SilverTalentActive from "public/silver_talent_active.png"
import CakeTalent from "public/cake_talent.png"
import CakeTalentActive from "public/cake_talent_active.png"
import CrownTalent from "public/crown_talent.png"
import CrownTalentActive from "public/crown_talent_active.png"
import ShipTalent from "public/ship_talent.png"
import ShipTalentActive from "public/ship_talent_active.png"
import SwimTalent from "public/swim_talent.png"
import SwimTalentActive from "public/swim_talent_active.png"
import ShockTalent from "public/shock_talent.png"
import ShockTalentActive from "public/shock_talent_active.png"
import KillTalent from "public/kill_talent.png"
import KillTalentActive from "public/kill_talent_active.png"

export const TalentPaths = [
  {
    title: "TALENT PATH 1",
    talents: [
      {
        id: 1,
        label: "stack",
        image: StackTalent,
        activeImage: StackTalentActive,
      },
      {
        id: 2,
        label: "silver",
        image: SilverTalent,
        activeImage: SilverTalentActive,
      },
      {
        id: 3,
        label: "cake",
        image: CakeTalent,
        activeImage: CakeTalentActive,
      },
      {
        id: 4,
        label: "crown",
        image: CrownTalent,
        activeImage: CrownTalentActive,
      },
    ],
  },
  {
    title: "TALENT PATH 2",
    talents: [
      {
        id: 5,
        label: "ship",
        image: ShipTalent,
        activeImage: ShipTalentActive,
      },
      {
        id: 6,
        label: "swim",
        image: SwimTalent,
        activeImage: SwimTalentActive,
      },
      {
        id: 7,
        label: "shock",
        image: ShockTalent,
        activeImage: ShockTalentActive,
      },
      {
        id: 8,
        label: "kill",
        image: KillTalent,
        activeImage: KillTalentActive,
      },
    ],
  },
]
