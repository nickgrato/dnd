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
    steps: [
      {
        label: "stack",
        image: StackTalent,
        activeImage: StackTalentActive,
      },
      {
        label: "silver",
        image: SilverTalent,
        activeImage: SilverTalentActive,
      },
      {
        label: "cake",
        image: CakeTalent,
        activeImage: CakeTalentActive,
      },
      {
        label: "crown",
        image: CrownTalent,
        activeImage: CrownTalentActive,
      },
    ],
  },
  {
    title: "TALENT PATH 2",
    steps: [
      {
        label: "ship",
        image: ShipTalent,
        activeImage: ShipTalentActive,
      },
      {
        label: "swim",
        image: SwimTalent,
        activeImage: SwimTalentActive,
      },
      {
        label: "shock",
        image: ShockTalent,
        activeImage: ShockTalentActive,
      },
      {
        label: "kill",
        image: KillTalent,
        activeImage: KillTalentActive,
      },
    ],
  },
]
