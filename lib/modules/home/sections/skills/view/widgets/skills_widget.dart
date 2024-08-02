import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_wrapper.dart';

import '../../../../../../core/constant/colors/app_colors.dart';
import '../../../../../../core/helper/responsive/screen_helper.dart';
import '../../data/skills_data.dart';
import 'shared/skills_body.dart';

class SkillsWidget extends StatelessWidget {
  const SkillsWidget({super.key, required this.width});
  final double width;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          return ResponsiveWrapper(
            maxWidth: width,
            minWidth: width,
            child: Flex(
              direction: ScreenHelper.isMobile(context)
                  ? Axis.vertical
                  : Axis.horizontal,
              children: [
                Expanded(
                  flex: ScreenHelper.isMobile(context) ? 0 : 4,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ShaderMask(
                        blendMode: BlendMode.srcIn,
                        shaderCallback: (bounds) =>
                            AppColors().goldLinearGradient,
                        child: Text(
                          "SKILLS",
                          style: Theme.of(context)
                              .textTheme
                              .displayLarge
                              ?.copyWith(
                                fontWeight: FontWeight.w900,
                                fontSize: 28.0,
                                height: 1.3,
                              ),
                        ),
                      ),
                      const SizedBox(
                        height: 15.0,
                      ),
                      Column(
                        children: skills
                            .map(
                              (skill) => SkillsBody(
                                skill: skill,
                              ),
                            )
                            .toList(),
                      )
                    ],
                  ),
                )
              ],
            ),
          );
        },
      ),
    );
  }
}
