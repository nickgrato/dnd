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
