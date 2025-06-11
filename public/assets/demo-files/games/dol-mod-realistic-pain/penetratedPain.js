const penetratedPain = () => {
  // increase pain based on penetration states every turn in combat
  if (stateInvalid(V.vaginastate, V.anusstate, V.mouthstate, V.bodysize))
    return;
  const painStates = {
    penetrated: 1.5,
    doublepenetrated: 4,
    tentacle: 1.5,
    tentacledeep: 3,
  };
  const bodySizeModifier = {
    0: 1,
    1: 0.5,
    2: 0.1,
    3: 0,
  };
  let pain = 0;
  [V.vaginastate, V.anusstate].forEach((state) => {
    if (Object.keys(painStates).includes(state)) pain += painStates[state];
  }, 0);
  pain += Object.keys(painStates).includes(V.mouthstate)
    ? painStates[V.mouthstate] * 0.5
    : 0;
  statChange.pain(
    (pain / 2) * Object.keys(bodySizeModifier).includes(V.bodysize)
      ? bodySizeModifier[V.bodysize]
      : 0
  );
};
