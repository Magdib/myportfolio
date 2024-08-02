import 'package:portfolio/core/constant/assets/app_assets.dart';

import '../../model/project_model.dart';

MyWorkModel ebuy = MyWorkModel(
  image: AppAssets().logo,
  name: "Ebuy",
  gitHubLink: "",
  appStoreLink: "",
  playStoreLink: "",
  details:
      """Mobile Application built with flutter and getx, It is a clothing E-commerce that offer an advanced filter search where you can filter products via gender,category,color,brand,size and price and it collect user data so it can show him/her the best product to purchase and it offers gift card, coupons and delivery system all you need is one click and we will do the rest!""",
  imageList: getAllImages(),
);

List<String> getAllImages() {
  List<String> images = [];
  for (int i = 1; i <= 19; i++) {
    images.add("assets/images/ebuy$i.png");
  }
  return images;
}
