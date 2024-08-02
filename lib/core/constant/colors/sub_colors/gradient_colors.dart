import 'package:flutter/material.dart';

mixin GradientColors {
  //Gradient colors
  Gradient get goldGradient => const LinearGradient(
        begin: Alignment.topRight,
        end: Alignment.bottomLeft,
        colors: [
          Color.fromARGB(255, 34, 114, 255),
          Color.fromARGB(140, 34, 114, 255),
        ],
      );

  Shader get goldLinearGradient => const LinearGradient(
        colors: <Color>[
          Color.fromARGB(140, 34, 114, 255),
          Color.fromARGB(255, 34, 114, 255),
        ],
      ).createShader(Rect.fromLTWH(0.0, 0.0, 200.0, 70.0));
}
