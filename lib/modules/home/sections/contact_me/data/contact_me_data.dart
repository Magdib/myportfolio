import 'package:portfolio/core/constant/assets/app_assets.dart';

import '../model/contact_me_model.dart';

List<ContactMeModel> contactMeList = [
  ContactMeModel(
      image: AppAssets().emailIcon,
      name: 'Email',
      link: '',
      value: 'magdibrahem72@gmail.com'),
  ContactMeModel(
      image: AppAssets().phoneIcon,
      name: 'Phone',
      link: '',
      value: '0937386785'),
  ContactMeModel(
      image: AppAssets().whatsUpIcon,
      name: 'Whats up',
      link: "//wa.me/+963937386785",
      value: '0937386785'),
  ContactMeModel(
      image: AppAssets().locationsIcon,
      name: 'Address',
      link: '',
      value: 'Syria/Tartous')
];
