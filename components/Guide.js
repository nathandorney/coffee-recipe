import * as Label from "@radix-ui/react-label";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useState } from "react";
import { Check } from "phosphor-react";

const CoffeeCalculator = () => {
  const [cupSize, setCupSize] = useState(250);
  const [numCups, setNumCups] = useState(1);
  const [waterAmount, setWaterAmount] = useState(cupSize * numCups);
  const [coffeeAmount, setCoffeeAmount] = useState(
    (cupSize * numCups * 3) / 50
  );

  const handleCupSizeChange = (event) => {
    setCupSize(event.target.value);
    setWaterAmount(event.target.value * numCups);
    setCoffeeAmount((event.target.value * numCups * 3) / 50);
  };

  const handleNumCupsChange = (event) => {
    setNumCups(event.target.value);
    setWaterAmount(event.target.value * cupSize);
    setCoffeeAmount((event.target.value * cupSize * 3) / 50);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const coffeePerWater = 3 / 50;
    const totalWater = cupSize * numCups;

    // Calculate coffee amount based on total water and ratio
    const coffeeNeeded = (totalWater * coffeePerWater).toFixed(1);
    setWaterAmount(totalWater);
    setCoffeeAmount(coffeeNeeded);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <Label.Root htmlFor="num-cups">Number of cups</Label.Root>
        <input
          id="num-cups"
          type="number"
          value={numCups}
          onChange={handleNumCupsChange}
        />
      </div>

      <div className="inputContainer">
        <Label.Root htmlFor="cup-size">Cup size (ml)</Label.Root>
        <input
          id="cup-size"
          type="number"
          value={cupSize}
          onChange={handleCupSizeChange}
        />
        <p className="note">An average cup holds around 250ml</p>
      </div>

      <h2>Ingredients:</h2>
      <ul>
        <li>{waterAmount}ml of filtered water</li>
        <li>{coffeeAmount}g of medium ground coffee</li>
      </ul>

      <h2>You will need:</h2>
      <ul>
        <li>V60</li>
        <li>Filter paper</li>
        <li>Kettle</li>
        <li>Timer</li>
        <li>Digital scale</li>
      </ul>

      <h2>Method:</h2>
      <ol className="methodList">
        <li className="methodItem">
          <Checkbox.Root id="m1" className="CheckboxRoot">
            <Checkbox.Indicator className="CheckboxIndicator">
              <Check size={18} weight="regular" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="m1" className="methodLabel">
            Boil some filtered water and place a filter paper in your V60
            filter, positioned over a cup.
          </label>
        </li>

        <li className="methodItem">
          <Checkbox.Root id="m2" className="CheckboxRoot">
            <Checkbox.Indicator className="CheckboxIndicator">
              <Check size={18} weight="regular" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="m2" className="methodLabel">
            Pour the boiling water over the filter paper to wet the entire
            paper. Then empty the cup, this gets rid of any paper taste and
            warms up your cup.
          </label>
        </li>

        <li className="methodItem">
          <Checkbox.Root id="m3" className="CheckboxRoot">
            <Checkbox.Indicator className="CheckboxIndicator">
              <Check size={18} weight="regular" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="m3" className="methodLabel">
            Place the cup and V60 on a digital scale. Add {coffeeAmount}g of
            medium ground coffee to the center of the filter, and reset the
            scale to 0g.
          </label>
        </li>

        <li className="methodItem">
          <Checkbox.Root id="m4" className="CheckboxRoot">
            <Checkbox.Indicator className="CheckboxIndicator">
              <Check size={18} weight="regular" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="m4" className="methodLabel">
            Start a timer and pour water over the grounds using circles until
            all the grounds are wet. Gently stir the slurry in both directions.
          </label>
        </li>
        <li className="methodItem">
          <Checkbox.Root id="m5" className="CheckboxRoot">
            <Checkbox.Indicator className="CheckboxIndicator">
              <Check size={18} weight="regular" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="m5" className="methodLabel">
            Keep adding 50g of water every 30 seconds until you reach the final
            amount of {waterAmount}g.
          </label>
        </li>

        <li className="methodItem">
          <Checkbox.Root id="m6" className="CheckboxRoot">
            <Checkbox.Indicator className="CheckboxIndicator">
              <Check size={18} weight="regular" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="m6" className="methodLabel">
            Give the slurry a gentle swirl and let the coffee filter through
            completely, usually around 3 and a half minutes.
          </label>
        </li>
      </ol>
    </form>
  );
};

export default CoffeeCalculator;
