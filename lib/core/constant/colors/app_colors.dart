import 'package:flutter/material.dart';
import 'sub_colors/gradient_colors.dart';
import 'sub_colors/grey_levels_color.dart';
import 'sub_colors/main_colors.dart';

class AppColors with MainColorsMixin, GradientColors, GreyLevelsColorMixin {
  static const Color secondaryColor = Color(0xffdcc77b);
  static const Color amberColor = Colors.amber;
  static const Color primaryColor = Color.fromARGB(255, 34, 114, 255);
  static const Color kBackgroundColor = Color(0xff1D1D1D);
  static const Color kDangerColor = Color.fromARGB(255, 34, 114, 255);
  static const Color kCaptionColor = Color.fromRGBO(166, 177, 187, 1);
}
